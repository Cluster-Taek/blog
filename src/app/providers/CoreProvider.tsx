import { AuthProvider } from '@/features/auth';
import { ThemeProvider } from '@/shared/ui/theme-provider';
import { TooltipProvider } from '@/shared/ui/tooltip';
import { QueryProvider } from './QueryProvider';
import { SessionProvider } from './SessionProvider';

interface ICoreProviderProps {
  children?: React.ReactNode;
}

export const CoreProvider = ({ children }: ICoreProviderProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <TooltipProvider delayDuration={0}>
        <SessionProvider>
          <AuthProvider>
            <QueryProvider>{children}</QueryProvider>
          </AuthProvider>
        </SessionProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
};
