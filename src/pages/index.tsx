import Layout from '@/components/Layout';
import CategoryCard from '@/components/CategoryCard';
import PostCard from '@/components/PostCard';
import { getAllPosts } from '@/lib/posts';
import { CATEGORIES } from '@/lib/constants';

export default function Home({ posts }) {
  return (
    <Layout>
      <section className="mb-16">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-xl"></div>
          <div className="relative bg-secondary/50 backdrop-blur-sm border border-accent/10 rounded-lg p-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              NetSecOps Hub
            </h1>
            <p className="text-xl text-gray-300">
              Exploring the intersection of network security, cloud infrastructure, and modern cybersecurity practices.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.values(CATEGORIES).map((category) => (
            <CategoryCard key={category} category={category} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Latest Posts</h2>
        <div className="space-y-8">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts: posts.slice(0, 5), // Show only the 5 most recent posts
    },
  };
}