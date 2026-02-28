import { HomeIcon, NotebookIcon, PenLineIcon, CodeIcon } from 'lucide-react';
import { Icons } from '@/shared/ui/icons';

export const NAVBAR_ITEMS = [
  { href: '/', icon: HomeIcon, label: 'Home' },
  { href: '/projects', icon: CodeIcon, label: 'Projects' },
  // { href: '/blog', icon: PenLineIcon, label: 'Blog' },
] as const;

export const SOCIAL_LINKS = {
  GitHub: {
    name: 'GitHub',
    url: 'https://github.com/Cluster-Taek',
    icon: Icons.github,
    navbar: true,
  },
  LinkedIn: {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/seungtaek-yoo-47473820b/',
    icon: Icons.linkedin,
    navbar: true,
  },
  Tistory: {
    name: 'Tistory',
    url: 'https://cluster-taek.tistory.com/',
    icon: NotebookIcon,
    navbar: true,
  },
} as const;
