---
title: '블로그 템플릿 프리뷰'
publishedAt: '2026-03-03'
summary: '템플릿에서 사용 가능한 모든 스니펫의 렌더링 결과를 미리 확인합니다.'
image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=192&fit=crop'
---

이 포스트는 블로그 템플릿(`templates/post.mdx`)에 포함된 모든 스니펫이 실제로 어떻게 렌더링되는지 확인하기 위한 프리뷰입니다. 글을 쓸 때 이 페이지를 참고하세요.

---

## 볼드 키워드 리스트

- **일관성** 모든 프로덕트에 걸쳐 동일한 UI를 유지한다
- **재사용성** 한 번 만든 컴포넌트를 여러 곳에서 활용한다
- **협업** 디자이너와 개발자 사이의 간극을 줄인다
- **유지보수** 시간이 지나도 기술 부채가 쌓이지 않는다

## 번호 리스트 (볼드 제목 + 설명)

1. **안정적인 리소스 경로** - 복수형 명사를 컨벤션으로 사용한다
2. **일관된 상태 코드** - 적은 수의 상태 코드를 일관되게 반환한다
3. **명시적인 인증 요구사항** - 인증과 인가 조건을 문서에 명확히 기술한다

## 인용문

> "문서화 없는 디자인 시스템은 그냥 컴포넌트 라이브러리일 뿐이다."

## 하이라이트 + 취소선

TypeScript는 현실을 모델링할 때 빛난다. 몇 가지 작은 기본값만으로도 코드베이스가 <mark>더 차분하고, 안전하고, 리팩터링하기 쉬워진다</mark>.

`any`를 지름길로 쓰지 마라. 그건 금방 ~~미래의 부채~~ 현재의 부채가 된다.

## 비교 테이블

| 전략               | 사용처               | TTL       |
| ------------------ | -------------------- | --------- |
| `force-cache`      | 정적 데이터          | 영구      |
| `revalidate: 3600` | 준정적 데이터        | 1시간     |
| `revalidate: 60`   | 자주 변경되는 데이터 | 1분       |
| `no-store`         | 실시간 데이터        | 캐시 없음 |

## 코드 블록 (파일명 표시)

```tsx title="Button.tsx"
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva('inline-flex items-center justify-center rounded-md font-medium transition-colors', {
  variants: {
    variant: {
      primary: 'bg-primary text-white hover:bg-primary/90',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
    },
    size: {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});
```

## 터미널 명령어

```bash title="terminal"
# 번들 분석기 설치
pnpm add -D @next/bundle-analyzer

# 분석 실행
ANALYZE=true pnpm build
```

## 이미지

<MediaContainer
  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&fit=crop"
  alt="노트북 위의 코드 에디터"
/>

## 인라인 코드

`useState`와 `useEffect`는 React에서 가장 기본적인 훅이다. `next/image` 컴포넌트를 사용하면 이미지 최적화를 `priority` 속성 하나로 제어할 수 있다.
