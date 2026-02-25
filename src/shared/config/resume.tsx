import {
  AWS,
  Docker,
  ExpressJsDark,
  Hotjar,
  Kubernetes,
  MySQL,
  NextJs,
  NodeJs,
  React as ReactIcon,
  TypeScript,
  VercelDark,
} from 'developer-icons';
import { type ReactNode, type SVGProps } from 'react';
import { Icons } from '@/shared/ui/icons';

interface Skill {
  name: string;
  icon?: (props: SVGProps<SVGSVGElement>) => ReactNode;
}

interface Hackathon {
  title: string;
  dates: string;
  location: string;
  description: string;
  image: string;
  win?: string;
  links: { title: string; icon: ReactNode; href: string }[];
}

const skills: Skill[] = [
  { name: 'React', icon: ReactIcon },
  { name: 'Next.js', icon: NextJs },
  { name: 'TypeScript', icon: TypeScript },
  { name: 'React Native', icon: ReactIcon },
  { name: 'Node.js', icon: NodeJs },
  { name: 'Docker', icon: Docker },
  { name: 'Kubernetes', icon: Kubernetes },
  { name: 'AWS', icon: AWS },
  { name: 'Express.js', icon: ExpressJsDark },
  { name: 'MySQL', icon: MySQL },
  { name: 'Mixpanel', icon: Hotjar },
  { name: 'Vercel', icon: VercelDark },
];

const hackathons: Hackathon[] = [];

export const DATA = {
  name: 'Seungtaek Yoo',
  initials: 'SY',
  url: 'https://github.com/Cluster-Taek',
  location: 'Seoul, South Korea',
  locationLink: 'https://www.google.com/maps/place/seoul',
  description:
    '5년차 프론트엔드 개발자. 기획부터 배포, 운영까지 풀사이클 경험을 갖추고 있으며 비개발자와의 커뮤니케이션에 강점이 있습니다.',
  summary:
    '이커머스, B2B SaaS, 핀테크 등 다양한 도메인에서 React 기반 프론트엔드를 설계하고 개발해왔습니다. 스타트업 공동 창업을 통해 기획부터 배포까지 프로덕트의 전 과정을 경험했고, CI/CD 자동화와 인프라 세팅까지 관심 영역을 확장하고 있습니다. 최근에는 다양한 LLM의 일관된 코드 퀄리티를 팀 단위에서 공유할 수 있는 방법에 관심을 가지고 있습니다.',
  avatarUrl: '/me.png',
  skills,
  contact: {
    email: 'yst811@gmail.com',
    tel: '+82-10-7190-5608',
    social: {
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
      email: {
        name: 'Send Email',
        url: 'mailto:yst811@gmail.com',
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: 'PurpleWorks',
      href: '',
      badges: ['E-Commerce', 'B2B SaaS'],
      location: 'Seoul',
      title: 'Frontend Developer',
      logoUrl: '',
      start: '2022.06',
      end: undefined as string | undefined,
      description:
        '코오롱몰 전시영역 리뉴얼 — 컴파운드 패턴 기반 앵커 시스템 설계, Mixpanel HOC 패턴 적용으로 수정 대상 파일 88% 감소(50개 → 6개), 슬라이딩 윈도우 전략으로 번들 로드 시간 3.5s → 1.5s 단축. B2B SaaS Brandrive — 대용량 파일 백그라운드 다운로드 구현, Multi-Tenant 권한 관리 체계 구축, EKS 배포 다운타임 30초 → 3초 미만 단축.',
    },
    {
      company: 'Data Studio',
      href: '',
      badges: ['FinTech', 'Co-Founder'],
      location: 'Seoul',
      title: 'Application / Server Developer',
      logoUrl: '',
      start: '2021.09',
      end: '2022.05',
      description:
        '가상화폐 카피 트레이딩 플랫폼 Reabit 기획 및 개발 리드. React Native와 Express.js로 MVP를 2주 만에 플레이스토어 등록. 트랜잭션 분리를 통한 결제·주문 무결성 보장.',
    },
  ],
  education: [
    {
      school: '한국산업기술대학교',
      href: 'https://www.kpu.ac.kr',
      degree: 'IT경영 (부전공: 벤처창업) | 학사',
      logoUrl: '',
      start: '2016',
      end: '2022',
    },
  ],
  projects: [
    {
      title: '코오롱몰 리뉴얼',
      href: '',
      dates: '2024.03 ~ 진행 중',
      active: true,
      description:
        '통합 이커머스 코오롱몰의 전시영역 전체 리뉴얼. 컴파운드 패턴 기반 앵커 시스템으로 재사용성 향상, Mixpanel 이벤트 파편화 해소(88% 파일 감소), 슬라이딩 윈도우 전략으로 번들 로드 시간 57% 단축.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Mixpanel', 'Swiper.js'],
      links: [] as { type: string; href: string; icon: ReactNode }[],
      image: '',
      video: '',
    },
    {
      title: 'Brandrive',
      href: '',
      dates: '2022.06 ~ 2024.02',
      active: false,
      description:
        'Google Drive를 레퍼런스로 한 B2B SaaS 디지털 에셋 관리 플랫폼. 대용량 파일 다중 다운로드, Multi-Tenant 권한 관리, EKS 기반 블루/그린 배포 적용.',
      technologies: ['React', 'TypeScript', 'Context API', 'EKS', 'Kubernetes', 'CloudWatch', 'Helm'],
      links: [] as { type: string; href: string; icon: ReactNode }[],
      image: '',
      video: '',
    },
    {
      title: '도리보틀',
      href: '',
      dates: '2024.03 ~ 2025.03',
      active: false,
      description:
        '친환경 리유저블 컵 대여 플랫폼. Webview + PWA로 잦은 수정에 유연하게 대응. EKS 인프라를 Vercel Serverless로 마이그레이션하여 월 서버비 $80 → $0 절감.',
      technologies: ['Next.js', 'PWA', 'Toss Payment API', 'Vercel', 'Redis'],
      links: [] as { type: string; href: string; icon: ReactNode }[],
      image: '',
      video: '',
    },
    {
      title: 'Reabit',
      href: '',
      dates: '2021.09 ~ 2022.05',
      active: false,
      description:
        'Upbit Open API 기반 카피 트레이딩 플랫폼. 리더 트레이더의 거래를 자동 팔로우하는 시스템. MVP 2주 만에 플레이스토어 등록 및 오픈.',
      technologies: ['React Native', 'Express.js', 'Upbit API', 'MySQL'],
      links: [] as { type: string; href: string; icon: ReactNode }[],
      image: '',
      video: '',
    },
  ],
  hackathons,
} as const;
