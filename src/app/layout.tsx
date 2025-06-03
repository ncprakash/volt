import './globals.css';
import { ClerkWrapper } from './clerk-provider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkWrapper>
      <html lang="en" className="h-full">
        <body className="antialiased flex flex-col min-h-full bg-gray-100 m-0 p-0">
          <main className="flex-0 p-0">{children}</main>
        </body>
      </html>
    </ClerkWrapper>
  );
}

