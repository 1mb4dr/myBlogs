export interface Post {
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  slug: string;
}

export interface PostWithContent extends Post {
  content: string;
}