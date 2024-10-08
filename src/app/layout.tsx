import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { Toaster } from 'sonner';
const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ProjectPro AI Landing Page",
  description: "Landing page for headstarter fellowship final project, ProjectPro AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: { colorPrimary: "#3371FF", fontSize: "16px" },
      }}
    >
      <html lang="en" className="relative">
      <GoogleAnalytics />
        <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
          {children}
          <Toaster position="bottom-center" />
        </body>
      </html>
    </ClerkProvider>
  );
}
