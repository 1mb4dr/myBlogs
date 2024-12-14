import { GetStaticProps, GetStaticPaths } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Layout from '@/components/Layout';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { format } from 'date-fns';

export default function BlogPost({ post, content }) {
  return (
    <Layout>
      <article className="prose prose-invert lg:prose-xl">
        <h1 className="text-white">{post.title}</h1>
        <div className="flex items-center text-sm text-gray-400 mb-8">
          <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
          <span className="mx-2">•</span>
          <span>{post.author}</span>
        </div>
        <div className="mb-8 flex gap-2">
          {post.tags.map(tag => (
            <span key={tag} className="bg-accent/10 text-accent px-2 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        <MDXRemote {...content} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  const { metadata, content } = getPostBySlug(slug as string);
  const mdxSource = await serialize(content);

  return {
    props: {
      post: metadata,
      content: mdxSource,
    },
  };
};