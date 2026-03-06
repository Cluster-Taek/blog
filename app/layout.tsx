import './globals.css';
import 'dayjs/locale/ko';
import { SpeedInsights } from '@vercel/speed-insights/next';
import dayjs from 'dayjs';
import { type Metadata } from 'next';
import localFont from 'next/font/local';
import { CoreProvider, MODAL_COMPONENTS } from '@/app';
import { Modal } from '@/features/modal';
import { cn } from '@/shared/lib/utils';
import { FlickeringGrid } from '@/shared/ui/flickering-grid';
import { Navbar } from '@/widgets/navbar';

dayjs.locale('ko');

const pretendard = localFont({
  src: '../src/fonts/PretendardVariable.woff2',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dev.cluster-taek.cloud'),
  title: {
    default: '유승택 | Frontend Developer',
    template: '%s | 유승택',
  },
  description:
    '프론트엔드 개발자 유승택의 포트폴리오. 이커머스, B2B SaaS, 핀테크 등 다양한 도메인에서 Next.js, React, TypeScript 기반 웹 개발 경험을 공유합니다.',
  keywords: [
    '유승택',
    '프론트엔드',
    '개발자',
    '포트폴리오',
    'Seungtaek Yoo',
    'Frontend',
    'Developer',
    'Next.js',
    'React',
    'TypeScript',
  ],
  authors: [{ name: '유승택', url: 'https://dev.cluster-taek.cloud' }],
  creator: '유승택',
  openGraph: {
    title: '유승택 | Frontend Developer',
    description: '비즈니스 문제를 기술로, 기술적 문제를 비즈니스로 풀어내는 프론트엔드 개발자 유승택의 포트폴리오.',
    url: 'https://dev.cluster-taek.cloud',
    siteName: '유승택',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '유승택 | Frontend Developer',
    description: '비즈니스 문제를 기술로, 기술적 문제를 비즈니스로 풀어내는 프론트엔드 개발자 유승택의 포트폴리오.',
    creator: '@Cluster-Taek',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'XKAqHns8G8866phz-3JpIKjXs4U-1hZbZ-xmfMTHy5U',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased relative', pretendard.variable)}>
        <CoreProvider>
          <div className="absolute inset-0 top-0 left-0 right-0 h-[100px] overflow-hidden z-0">
            <FlickeringGrid
              className="h-full w-full"
              squareSize={2}
              gridGap={2}
              style={{
                maskImage: 'linear-gradient(to bottom, black, transparent)',
                WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
              }}
            />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6">{children}</div>
          <Modal components={MODAL_COMPONENTS} />
          <Navbar />
        </CoreProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
