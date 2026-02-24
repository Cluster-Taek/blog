import Link from 'next/link';

/**
 * Footer Widget
 *
 * 전역 푸터 컴포넌트
 * - Widgets 레이어: 여러 페이지에서 재사용되는 복합 UI 블록
 * - 독립적인 비즈니스 로직 포함 가능
 * - Features, Entities, Shared 조합 가능
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full border-t border-border bg-muted/50 mt-auto">
      <div className="max-w-[1200px] mx-auto p-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-muted-foreground">
          © {currentYear} Next.js Boilerplate. All rights reserved.
        </div>

        <div className="flex gap-6">
          <Link
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Next.js
          </Link>
          <Link
            href="https://feature-sliced.design"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Feature-Sliced Design
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
};
