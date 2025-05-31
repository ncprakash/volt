// app/layout.tsx or app/root-layout.tsx

import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" className="h-full">
        <body className="antialiased flex flex-col min-h-full bg-gray-100 m-0 p-0">
          {/* Using flex-col on body so main can grow correctly */}
          <main className="flex-0 p-0">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}

