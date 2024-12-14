import { TAG_COLORS } from '@/lib/constants';

interface TagProps {
  name: string;
  className?: string;
}

export default function Tag({ name, className = '' }: TagProps) {
  const colorClass = TAG_COLORS[name.toLowerCase()] || 'blue';
  const baseClass = `inline-flex items-center px-2 py-1 rounded-full text-sm`;
  const colorVariants = {
    blue: 'bg-blue-500/10 text-blue-400',
    green: 'bg-green-500/10 text-green-400',
    purple: 'bg-purple-500/10 text-purple-400',
    orange: 'bg-orange-500/10 text-orange-400',
    red: 'bg-red-500/10 text-red-400',
  };

  return (
    <span className={`${baseClass} ${colorVariants[colorClass]} ${className}`}>
      {name}
    </span>
  );
}