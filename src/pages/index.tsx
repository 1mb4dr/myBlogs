import Layout from '@/components/Layout';
import PostCard from '@/components/PostCard';
import { getAllPosts, PostMetadata } from '@/lib/posts';

export default function Home({ posts }: { posts: PostMetadata[] }) {
  return (
    <Layout>
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to My Cybersecurity Blog
        </h1>
        <p className="text-gray-300">
          Exploring network security, FortiGate implementations, and cloud infrastructure
        </p>
      </section>

      <section className="space-y-8">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}