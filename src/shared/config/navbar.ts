import { HomeIcon, NotebookIcon } from 'lucide-react';
import { Icons } from '@/shared/ui/icons';

export const NAVBAR_ITEMS = [
  { href: '/', icon: HomeIcon, label: 'Home' },
  { href: '/blog', icon: NotebookIcon, label: 'Blog' },
] as const;

export const SOCIAL_LINKS = {
  GitHub: {
    name: 'GitHub',
    url: 'https://github.com',
    icon: Icons.github,
    navbar: true,
  },
  LinkedIn: {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: Icons.linkedin,
    navbar: true,
  },
} as const;
