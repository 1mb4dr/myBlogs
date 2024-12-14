import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '@/components/Layout';
import PostCard from '@/components/PostCard';
import { getAllPosts } from '@/lib/posts';
import { CATEGORIES, CATEGORY_METADATA } from '@/lib/constants';

export default function CategoryPage({ posts, category }) {
  const metadata = CATEGORY_METADATA[category];

  return (
    <Layout>
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">{metadata.icon}</span>
          <h1 className="text-3xl font-bold text-white">{metadata.title}</h1>
        </div>
        <p className="text-gray-400">{metadata.description}</p>
      </div>

      <div className="space-y-8">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.values(CATEGORIES).map((category) => ({
      params: { category },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { category } = params;
  const allPosts = getAllPosts();
  const posts = allPosts.filter((post) => 
    post.tags.includes(category as string)
  );

  return {
    props: {
      posts,
      category,
    },
  };
}