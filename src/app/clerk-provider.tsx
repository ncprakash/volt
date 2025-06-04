'use client';

import { ClerkProvider } from '@clerk/nextjs';

export function ClerkWrapper({ children }: { children: React.ReactNode }) {
  const publishableKey =
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || process.env.CLERK_PUBLISHABLE_KEY;

  if (!publishableKey) {
    console.error("❌ Missing Clerk publishableKey. Make sure it's set in the environment variables.");
    return null;
  }

  return (
    <ClerkProvider publishableKey={publishableKey}>
      {children}
    </ClerkProvider>
  );
}


