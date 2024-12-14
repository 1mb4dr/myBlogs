import Link from 'next/link';
import { format } from 'date-fns';
import { PostMetadata } from '@/lib/posts';

interface PostCardProps {
  post: PostMetadata;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-secondary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <Link href={`/blog/${post.slug}`} className="block">
        <h2 className="text-2xl font-bold text-white mb-2">{post.title}</h2>
        <p className="text-gray-300 mb-4">{post.description}</p>
        <div className="flex items-center text-sm text-gray-400">
          <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
          <span className="mx-2">•</span>
          <span>{post.author}</span>
        </div>
        <div className="mt-4 flex gap-2">
          {post.tags.map(tag => (
            <span key={tag} className="bg-accent/10 text-accent px-2 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </article>
  );
}