'use client';

import { useHydrationSafe } from '@/hooks/useHydrationSafe';

interface ClientOnlyProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * Component that only renders its children on the client side
 * Useful for components that depend on browser-only APIs or might have hydration issues
 */
export default function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const isHydrated = useHydrationSafe();

  if (!isHydrated) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
