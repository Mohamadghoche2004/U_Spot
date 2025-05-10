// This is a Server Component that can render children as SSR
import { ThemeProvider } from "next-themes";
import ThemeToggleWrapper from "./ThemeToggleWrapper";

export default function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="light" 
      enableSystem={false}
      disableTransitionOnChange
    >
      {/* Children will be SSR'd */}
      {children}
      
      {/* Client component boundary */}
      <ThemeToggleWrapper />
    </ThemeProvider>
  );
}
