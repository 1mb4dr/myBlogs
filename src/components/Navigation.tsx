import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-secondary">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white font-bold text-xl">
            CyberBlog
          </Link>
          <div className="space-x-4">
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white">
              About
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-white">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}