import Link from 'next/link';
import { CATEGORY_METADATA } from '@/lib/constants';

interface CategoryCardProps {
  category: keyof typeof CATEGORY_METADATA;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const metadata = CATEGORY_METADATA[category];
  
  return (
    <Link href={`/category/${category}`}>
      <div className="bg-secondary/50 backdrop-blur-sm border border-accent/10 rounded-lg p-6 hover:border-accent/30 transition-all">
        <div className="text-3xl mb-3">{metadata.icon}</div>
        <h3 className="text-xl font-bold text-white mb-2">{metadata.title}</h3>
        <p className="text-gray-400">{metadata.description}</p>
      </div>
    </Link>
  );
}