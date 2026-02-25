import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description:
    '프론트엔드 개발자 유승택입니다. 이커머스, B2B SaaS, 핀테크 등 다양한 도메인에서 React 기반 프론트엔드를 설계하고 개발해왔습니다.',
};

export { HomePage as default } from '@/views/home';
