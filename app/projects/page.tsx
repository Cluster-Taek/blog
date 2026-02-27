import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: '이커머스, B2B SaaS, 핀테크 등 다양한 도메인에서 진행한 프로젝트입니다.',
};

export { ProjectsPage as default } from '@/views/projects';
