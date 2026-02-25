import './globals.css';
import 'dayjs/locale/ko';
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
  title: {
    default: 'Seungtaek Yoo | Frontend Developer',
    template: '%s | Seungtaek Yoo',
  },
  description: '5년차 프론트엔드 개발자 유승택의 포트폴리오 블로그. React, Next.js, TypeScript 기반 웹 개발.',
  openGraph: {
    title: 'Seungtaek Yoo | Frontend Developer',
    description: '5년차 프론트엔드 개발자 유승택의 포트폴리오 블로그.',
    url: 'https://github.com/Cluster-Taek',
    siteName: 'Seungtaek Yoo',
    locale: 'ko_KR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
      </body>
    </html>
  );
}
