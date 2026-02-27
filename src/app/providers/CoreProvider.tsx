import { ThemeProvider } from '@/shared/ui/theme-provider';
import { TooltipProvider } from '@/shared/ui/tooltip';
import { QueryProvider } from './QueryProvider';

interface ICoreProviderProps {
  children?: React.ReactNode;
}

export const CoreProvider = ({ children }: ICoreProviderProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <TooltipProvider delayDuration={0}>
        <QueryProvider>{children}</QueryProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
};
