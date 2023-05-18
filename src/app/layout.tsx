import Nav from "@/components/Nav";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Providers from "./providers";
import { Divider } from "@chakra-ui/react";
import StarGithubBadge from "@/components/StarGithubBadge";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AginDB",
  description: "A Database that will never exist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/confused.png" type="image/x-icon" />
      <body className={inter.className}>
        <Providers>
          <Nav />
          <StarGithubBadge />
          {children}
        </Providers>
      </body>
    </html>
  );
}
