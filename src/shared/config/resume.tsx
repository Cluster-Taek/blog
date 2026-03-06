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
import { GlobeIcon, PlayIcon } from 'lucide-react';
import { type ReactNode, type SVGProps } from 'react';
import { Icons } from '@/shared/ui/icons';

interface Skill {
  name: string;
  icon?: (props: SVGProps<SVGSVGElement>) => ReactNode;
}

interface ProjectLink {
  type: string;
  href: string;
  icon: ReactNode;
}

interface ProjectSlide {
  image?: string;
  video?: string;
  description?: ReactNode;
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
  url: 'https://dev.cluster-taek.cloud',
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
      title: 'create-next-claude-app',
      slug: 'create-next-claude-app',
      href: '',
      dates: '2025.06 ~ 진행 중',
      active: true,
      description:
        'Claude Code + FSD 아키텍처 기반 Next.js 프로젝트 스캐폴딩 CLI. TDD 워크플로우와 LLM 친화적 구조를 자동 세팅하여 개발 생산성을 극대화하는 오픈소스 도구.',
      technologies: ['Node.js', 'TypeScript', 'Claude Code', 'FSD', 'npm'],
      links: [
        {
          type: 'GitHub',
          href: 'https://github.com/Cluster-Taek/create-next-claude-app',
          icon: <Icons.github className="size-4" />,
        },
      ] satisfies ProjectLink[],
      image: '/project/create-next-claude-app.png',
      video: '',
      slides: [
        {
          image: '/project/create-next-claude-app_main.png',
          description: (
            <div className="space-y-2">
              <p className="font-semibold text-foreground">FSD 아키텍처로 LLM 토큰 최적화</p>
              <p>
                <strong>Feature-Sliced Design</strong> 아키텍처를 적용하여 LLM이 코드 맥락을 파악할 때 토큰 사용을
                최적화했습니다. 레이어별 명확한 경계와 의존성 관리로 코드 탐색 범위를 최소화합니다.
              </p>
            </div>
          ),
        },
        {
          image: '/project/create-next-claude-app.png',
          description: (
            <div className="space-y-2">
              <p className="font-semibold text-foreground">TDD 기반 Claude Skill 워크플로우</p>
              <p>
                <strong>/tdd → /fsd → 구현 → /review → /commit</strong> 프로세스를 Claude Code Skills로 내장했습니다.
                요구사항에서 테스트 코드를 먼저 생성하고(Red), FSD 슬라이스를 스캐폴딩한 뒤 구현하는 흐름으로 개발
                생산성을 극대화합니다.
              </p>
            </div>
          ),
        },
        {
          video: '/project/create-next-claude-app_cli.mp4',
          description: (
            <div className="space-y-2">
              <p className="font-semibold text-foreground">CLI 기반 프로젝트 스캐폴딩</p>
              <p>
                <strong>npx create-next-claude-app my-app</strong> 한 줄로 Next.js 16 + FSD 아키텍처 보일러플레이트를
                즉시 생성합니다. Zustand, TanStack Query, React Hook Form + Zod, NextAuth.js 등 실무에서 검증된 스택이
                기본 세팅됩니다.
              </p>
            </div>
          ),
        },
      ] satisfies ProjectSlide[],
    },
    {
      title: '코오롱몰 리뉴얼',
      slug: 'kolonmall',
      href: '',
      dates: '2024.03 ~ 진행 중',
      active: true,
      description:
        '통합 이커머스 코오롱몰의 전시영역 전체 리뉴얼. 컴파운드 패턴 기반 앵커 시스템으로 재사용성 향상, Mixpanel 이벤트 파편화 해소(88% 파일 감소), 슬라이딩 윈도우 전략으로 번들 로드 시간 57% 단축.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Mixpanel', 'Swiper.js'],
      links: [
        {
          type: 'Website',
          href: 'https://www.kolonmall.com',
          icon: <GlobeIcon />,
        },
      ] satisfies ProjectLink[],
      image: '/project/kolonmall.png',
      video: '/project/kolonmall.mp4',
      slides: [
        {
          video: '/project/kolonmall.mp4',
          description: (
            <div className="space-y-2">
              <p className="font-semibold text-foreground">컴파운드 패턴 기반 앵커 시스템 재설계</p>
              <p>
                기존 기획전 앵커 시스템은 특정 페이지와 결합도가 높아 동적 렌더링 환경에서 재사용이 어려웠습니다.{' '}
                <strong>컴파운드 패턴</strong>을 활용해 {'<AnchorSection>'}으로 감싸진 컴포넌트를 렌더링 이후 앵커
                Context에 등록하고, 스크롤 방향에 따른 동적 랜딩 위치를 계산하도록 재설계했습니다.
              </p>
            </div>
          ),
        },
        {
          video: '/project/kolonmall_mixpanel.mp4',
          description: (
            <div className="space-y-2">
              <p className="font-semibold text-foreground">Mixpanel 이벤트 트래킹 공통 모듈화</p>
              <p>
                50여 개 패널 컴포넌트에 파편화된 트래킹 요구사항을 재정립하고, 패널 타입별{' '}
                <strong>HOC(고차 컴포넌트) 패턴과 Custom Hook</strong>을 적용하여 수정 대상 파일을{' '}
                <strong>50개에서 6개로 88% 감소</strong>시켰습니다.
              </p>
            </div>
          ),
        },
        {
          image: '/project/kolonmall_swiper.png',
          description: (
            <div className="space-y-2">
              <p className="font-semibold text-foreground">슬라이딩 윈도우 전략으로 번들 로드 57% 단축</p>
              <p>
                메인 화면 스와이퍼에서 모든 패널이 한 번에 렌더링되며 초기 로딩이 느린 문제를{' '}
                <strong>[current-1, current, current+1] 슬라이딩 윈도우 전략</strong>과 <strong>Dynamic Imports</strong>
                로 해결. 주요 번들 로드 시간을 <strong>3500ms → 1500ms</strong>로 대폭 단축했습니다.
              </p>
            </div>
          ),
        },
      ] satisfies ProjectSlide[],
    },
    {
      title: 'Brandrive',
      slug: 'brandrive',
      href: '',
      dates: '2022.06 ~ 2024.02',
      active: false,
      description:
        'Google Drive를 레퍼런스로 한 B2B SaaS 디지털 에셋 관리 플랫폼. 대용량 파일 다중 다운로드, Multi-Tenant 권한 관리, EKS 기반 블루/그린 배포 적용.',
      technologies: ['React', 'TypeScript', 'Context API', 'EKS', 'Kubernetes', 'CloudWatch', 'Helm'],
      links: [
        {
          type: 'Website',
          href: 'https://www.brandrive.co.kr/',
          icon: <GlobeIcon />,
        },
      ] satisfies ProjectLink[],
      image: '/project/brandrive_home.png',
      video: '/project/brandrive_home.mp4',
      slides: [
        {
          video: '/project/brandrive_home.mp4',
          description: (
            <div className="space-y-2">
              <p className="font-semibold text-foreground">Web Storage 시스템 개발</p>
              <p>
                Google Drive를 레퍼런스로 <strong>폴더 라우팅, 다중 파일 업/다운로드, 이미지 편집 및 버전 관리</strong>{' '}
                등 Web Storage 시스템 UI 전반을 개발했습니다. 재귀 호출 및 localStorage 캐싱을 활용하여 서버 요청 횟수를
                최소화한 폴더 트리 구조 렌더링을 최적화했습니다.
              </p>
            </div>
          ),
        },
        {
          video: '/project/brandrive_download.mp4',
          description: (
            <div className="space-y-2">
              <p className="font-semibold text-foreground">대용량 파일 다중 다운로드 상태 관리</p>
              <p>
                서버 측 압축 시간 소요로 지연이 발생하고 진행 상태 피드백이 없는 문제를{' '}
                <strong>Polling + Context API</strong>를 조합하여 해결. 사용자가 다른 페이지로 이동하더라도
                백그라운드에서 프로세스를 지속하고 진행률을 전역적으로 노출했습니다.
              </p>
            </div>
          ),
        },
        {
          video: '/project/brandrive_tenant.mp4',
          description: (
            <div className="space-y-2">
              <p className="font-semibold text-foreground">Multi-Tenant 권한 관리</p>
              <p>
                Access Token 만료 기간을 5분 단위로 설정하고 Middleware에서 권한 재검증.{' '}
                <strong>RefreshToken + Sliding Session</strong> 방식을 적용하여 편의성과 보안을 동시에 확보했습니다.
              </p>
            </div>
          ),
        },
        {
          image: '/project/brandrive-eks.png',
          description: (
            <div className="space-y-2">
              <p className="font-semibold text-foreground">EKS 배포 다운타임 최소화</p>
              <p>
                OOM 발생 및 다운타임 문제를 CloudWatch Alarms + Slack 경보, 오토스케일링 Helm Chart,{' '}
                <strong>Readiness Probe 롤링 업데이트</strong>로 해결. 배포 시 다운타임을{' '}
                <strong>30초 → 3초 미만</strong>으로 단축했습니다.
              </p>
              <a
                href="https://cluster-taek.tistory.com/entry/NextJS-k8s-%ED%94%84%EB%A1%9C%EB%8D%95%EC%85%98-%ED%99%98%EA%B2%BD%EC%97%90%EC%84%9C-OOMKilled-%ED%98%84%EC%83%81"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                관련 포스팅 보러가기
              </a>
            </div>
          ),
        },
      ] satisfies ProjectSlide[],
    },
    {
      title: 'Reabit',
      slug: 'reabit',
      href: '',
      dates: '2021.09 ~ 2022.05',
      active: false,
      description:
        'Upbit Open API 기반 카피 트레이딩 플랫폼. 리더 트레이더의 거래를 자동 팔로우하는 시스템. MVP 2주 만에 플레이스토어 등록 및 오픈.',
      technologies: ['React Native', 'Express.js', 'Upbit API', 'MySQL'],
      links: [
        {
          type: 'Youtube',
          href: 'https://www.youtube.com/watch?v=X3DaVx7vX4E',
          icon: <PlayIcon />,
        },
      ] satisfies ProjectLink[],
      image: '/project/reabit.png',
      video: '/project/reabit.mp4',
      slides: [
        {
          video: '/project/reabit.mp4',
          description: (
            <div className="space-y-2">
              <p className="font-semibold text-foreground">카피 트레이딩 플랫폼 기획 및 개발 리드</p>
              <p>
                팔로우한 리더 트레이더 혹은 봇의 거래를 자동으로 따라 거래하는 시스템을 설계했습니다. 트레이딩 봇 및
                리더 팔로우, <strong>Play Store 구독 결제, 푸시 알림, 백테스팅 차트</strong>를 구현하고, React Native로{' '}
                <strong>2주 만에 플레이스토어 런칭</strong>에 성공했습니다.
              </p>
            </div>
          ),
        },
        {
          image: '/project/reabit_architecture.png',
          description: (
            <div className="space-y-2">
              <p className="font-semibold text-foreground">백테스팅/트레이딩 서버 연동</p>
              <p>
                <strong>ExpressJS</strong>로 어플리케이션 서버를 개발하고, 백테스팅 서버 및 트레이딩 서버와 연동하여
                백테스팅 차트 출력 및 카피 트레이딩 기능을 지원했습니다.
              </p>
            </div>
          ),
        },
        {
          image: '/project/reabit-concurrency.png',
          description: (
            <div className="space-y-2">
              <p className="font-semibold text-foreground">한정 재고 동시성 제어</p>
              <p>
                투자 전략별 수용 Capacity가 존재하여 동시성 제어가 필요했습니다. 외부 모듈과 어플리케이션 서버의{' '}
                <strong>트랜잭션을 분리</strong>하고, 실패 시 해당 결제를 취소하는 방식으로 결제와 주문의 무결성을
                보장했습니다.
              </p>
            </div>
          ),
        },
      ] satisfies ProjectSlide[],
    },
    {
      title: '도리보틀',
      slug: 'doribottle',
      href: '',
      dates: '2024.03 ~ 2025.03',
      active: false,
      description:
        '예비 창업 패키지 선정. 친환경 리유저블 컵 대여 플랫폼. Webview + PWA로 잦은 수정에 유연하게 대응. EKS 인프라를 Vercel Serverless로 마이그레이션하여 월 서버비 $80 → $0 절감.',
      technologies: ['Next.js', 'PWA', 'Toss Payment API', 'Vercel', 'Redis', 'OneSignal'],
      links: [] satisfies ProjectLink[],
      image: '/project/doribottle.png',
      video: '/project/doribottle.mp4',
      slides: [
        {
          video: '/project/doribottle.mp4',
          description: (
            <div className="space-y-2">
              <p className="font-semibold text-foreground">Webview + PWA 기반 유연한 대응</p>
              <p>
                잦은 수정에 기민하게 대응하기 위해 <strong>Webview + PWA</strong>를 도입하고,{' '}
                <strong>Toss Payment 빌링 API</strong>를 활용하여 결제 프로세스를 간소화했습니다.{' '}
                <strong>OneSignal</strong>을 활용하여 컵 반납 알림, 결제 완료 등 웹 푸시 알림을 구현했습니다.
              </p>
            </div>
          ),
        },
        {
          image: '/project/doribottle_admin.png',
          description: (
            <div className="space-y-2">
              <p className="font-semibold text-foreground">Serverless 마이그레이션으로 서버비 100% 절감</p>
              <p>
                팀원 이탈로 EKS 인프라 유지보수 한계에 직면하여, Vercel 개인 플랜으로 Next.js 기반 모놀리식 Admin으로
                마이그레이션. 배포, DB, Redis까지 <strong>Serverless 환경</strong>으로 전환하여 매달 서버 유지 비용을{' '}
                <strong>$80 → $0</strong>으로 절감했습니다.
              </p>
            </div>
          ),
        },
      ] satisfies ProjectSlide[],
    },
    {
      title: '연합뉴스 헤드라인 Slack Bot',
      slug: 'yna-slack-bot',
      href: '',
      dates: '2024',
      active: false,
      description:
        'Lambda + EventBridge를 활용한 연합뉴스 실시간 헤드라인 Slack Bot. Serverless 아키텍처로 스케줄링된 뉴스 수집 및 Slack 채널 자동 전송.',
      technologies: ['AWS Lambda', 'EventBridge', 'Slack API', 'Node.js'],
      links: [] satisfies ProjectLink[],
      image: '/project/yna-slack.png',
      video: '',
      slides: [
        {
          image: '/project/yna-slack_chat.png',
          description: (
            <div className="space-y-2">
              <p className="font-semibold text-foreground">Serverless 실시간 뉴스 수집 파이프라인</p>
              <p>
                <strong>AWS Lambda + EventBridge</strong>로 연합뉴스 헤드라인을 스케줄링 기반으로 자동 수집하고,{' '}
                <strong>Slack API</strong>를 통해 지정 채널에 실시간 전송하는 Bot을 개발했습니다. 별도 서버 운영 없이
                Serverless 아키텍처로 안정적으로 운영됩니다.
              </p>
            </div>
          ),
        },
      ] satisfies ProjectSlide[],
    },
    {
      title: 'Flutter 연차 캘린더',
      slug: 'flutter-hr-calendar',
      href: '',
      dates: '2023',
      active: false,
      description:
        'iOS 기본 캘린더를 레퍼런스로 한 무한 스크롤 연차 캘린더 및 신청 앱. 사내 연차 관리 편의를 위해 개발.',
      technologies: ['Flutter', 'Dart', 'iOS', 'Android'],
      links: [] satisfies ProjectLink[],
      image: '/project/purple-hr.png',
      video: '/project/purple-hr.mp4',
      slides: [
        {
          video: '/project/purple-hr.mp4',
          description: (
            <div className="space-y-2">
              <p className="font-semibold text-foreground">iOS 캘린더 레퍼런스 무한 스크롤 구현</p>
              <p>
                iOS 기본 캘린더를 레퍼런스로 <strong>무한 스크롤 연차 캘린더</strong>를 Flutter로 개발했습니다. 사내
                연차 관리 편의를 위해 연차 신청 및 조회 기능을 구현했습니다.
              </p>
            </div>
          ),
        },
      ] satisfies ProjectSlide[],
    },
  ],
  hackathons,
} as const;

export function getProjectBySlug(slug: string) {
  return DATA.projects.find((p) => p.slug === slug);
}
