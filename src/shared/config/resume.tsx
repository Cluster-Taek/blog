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
  { name: 'Next.js', icon: NextJs },
  { name: 'React', icon: ReactIcon },
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
  description: (
    <>
      개발자라는 직업이 아닌 <span className="font-bold">개발자의 삶</span>을 살아가는
      <br />
      <span className="font-bold">비즈니스 문제를 기술로 풀어내는</span> 프론트엔드 엔지니어
    </>
  ),
  summary: (
    // <div className="flex flex-col gap-1">
    //   <span>
    //     <b className="text-primary">[폭넓은 개발 사이클 경험]</b> 초기 스타트업의 0 to 1 구축부터 코오롱몰과 같은 대규모
    //     커머스의 아키텍처 리뉴얼까지, 기획-배포-운영 전반의 과정을 경험했습니다.
    //   </span>
    //   <span>
    //     <b className="text-primary">[DX & 성능 최적화]</b> 슬라이딩 윈도우 전략과 Dynamic Imports를 적용해 메인 화면
    //     초기 번들 로드 시간을 57% 단축(3500ms → 1500ms)했으며, 컴파운드 패턴으로 레거시 시스템을 재설계하여 확장성을
    //     극대화했습니다.
    //   </span>
    //   <span>
    //     <b className="text-primary">[프론트엔드 인프라 최적화]</b>{' '}
    //     <a
    //       href="https://cluster-taek.tistory.com/entry/NextJS-k8s-%ED%94%84%EB%A1%9C%EB%8D%95%EC%85%98-%ED%99%98%EA%B2%BD%EC%97%90%EC%84%9C-OOMKilled-%ED%98%84%EC%83%81"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="text-primary underline"
    //     >
    //       EKS 배포 다운타임 최소화
    //     </a>
    //     , Serverless 도입을 통한 서버비 절감 등 인프라와 운영 레벨의 이슈를 능동적으로 해결합니다.
    //   </span>
    //   <span>
    //     <b className="text-primary">[LLM 기반 생산성 향상]</b>{' '}
    //     <a
    //       href="https://github.com/Cluster-Taek/create-next-claude-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="text-primary underline"
    //     >
    //       Claude Code 기반의 Next.js CLI(create-next-claude-app)
    //     </a>{' '}
    //     를 개발해 npm에 배포했습니다. FSD 아키텍처를 적용해 LLM의 코드 맥락 파악을 최적화하고, TDD 기반 워크플로우로
    //     개발 생산성을 높이는 시도를 이어가고 있습니다.
    //   </span>
    // </div>
    <p>
      최근 프론트엔드 생태계에 <b>LLM을 실질적으로 접목하는 새로운 개발 워크플로우</b> 구축에 몰두하고 있습니다. 지난
      5년간 초기 스타트업부터 <b>대규모 커머스의 리뉴얼</b>까지 폭넓은 비즈니스 환경을 거치며, <b>렌더링 최적화</b>는
      물론 <b>운영 레벨의 문제</b>까지 능동적으로 해결해 왔습니다. 업무 밖의 시간에도 기술적 호기심을 바탕으로 꾸준히
      사이드 프로젝트를 진행하고 있으며, 최근에는 <b>Claude Code</b>와 <b>FSD 아키텍처</b>를 적용한{' '}
      <a
        href="https://github.com/Cluster-Taek/create-next-claude-app"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold underline"
      >
        Next.js CLI를 직접 개발해 npm에 배포
      </a>
      하기도 했습니다.
    </p>
  ),
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
      logoUrl: '/purpleworks.webp',
      start: '2022.06.22',
      end: undefined as string | undefined,
      description: (
        <div className="space-y-2">
          <div className="space-y-1">
            <p className="font-semibold">[코오롱 BX 팀]</p>
            <ul className="list-disc list-outside pl-4 space-y-1">
              <li>
                통합 이커머스{' '}
                <a
                  href="https://www.kolonmall.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold underline"
                >
                  Kolon Mall
                </a>{' '}
                전시 영역 리뉴얼 및 유지 보수
              </li>
              <li>전시 영역의 동적 패널 및 컴포넌트 시스템 설계 참여 및 구현</li>
              <li>공통 모듈 동적 앵커 시스템 구현</li>
              <li>데스크탑, 모바일, 어플리케이션에서 WebView 및 크로스 브라우징 이슈 대응</li>
              <li>Mixpanel을 활용한 재사용 가능한 데이터 트래킹 모듈 구현</li>
            </ul>
          </div>
          <div className="space-y-1">
            <p className="font-semibold">[Brandrive 팀]</p>
            <ul className="list-disc list-outside pl-4 space-y-1">
              <li>
                <a
                  href="https://www.brandrive.co.kr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold underline"
                >
                  B2B SaaS 플랫폼 Brandrive
                </a>{' '}
                서비스 리뉴얼 프론트엔드 담당 및 런칭
              </li>
              <li>클라우드 스토리지 파일 다중 업로드, 버전 관리, 이미지 자산 편집 기능 개발</li>
              <li>Multi-Tenancy 환경에서의 프론트엔드 구조 설계 참여</li>
              <li>
                <a
                  href="https://cluster-taek.tistory.com/entry/NextJS-k8s-%ED%94%84%EB%A1%9C%EB%8D%95%EC%85%98-%ED%99%98%EA%B2%BD%EC%97%90%EC%84%9C-OOMKilled-%ED%98%84%EC%83%81"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  EKS 기반 블루/그린 배포 적용 및 인프라 관련 에러 대응
                </a>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      company: 'Data Studio',
      href: '',
      badges: ['FinTech', 'Co-Founder'],
      location: 'Seoul',
      title: 'Application / Server Developer',
      logoUrl: '',
      start: '2021.09.01',
      end: '2022.05.31',
      description: (
        <ul className="list-disc list-outside pl-4 space-y-1">
          <li>업비트 API를 활용한 가상화폐 스타트업 창업</li>
          <li>김치 프리미엄 실시간 정렬 사이트 개발</li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=X3DaVx7vX4E"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold underline"
            >
              카피 트레이딩 플랫폼 Reabit
            </a>{' '}
            프로젝트 기획 및 개발 리드
          </li>
          <li>React Native로 2주 만에 크로스 플랫폼 앱 개발 및 플레이스토어 런칭</li>
          <li>백테스팅/트레이딩 서버 연동 및 트레이더 구독 기능 구현</li>
        </ul>
      ),
    },
  ],
  education: [
    {
      school: '한국공학대학교',
      href: 'https://www.tukorea.ac.kr',
      degree: 'IT경영 (부전공: 벤처창업) | 학사',
      logoUrl: '/tukorea.webp',
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
