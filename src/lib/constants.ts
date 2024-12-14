export const SITE_TITLE = 'Cybersecurity Blog';
export const SITE_DESCRIPTION = 'Exploring network security, FortiGate implementations, and cloud infrastructure';
export const AUTHOR = 'Your Name';

export const NAVIGATION_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
] as const;

export const TAG_COLORS = {
  cybersecurity: 'blue',
  networking: 'green',
  fortigate: 'purple',
  cloudflare: 'orange',
  containerlab: 'red',
} as const;