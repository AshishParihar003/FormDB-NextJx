import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

// Import the Inter font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ForumDE-Code Your Career",
  description: "ForumDE are into providing industry level IT training to the students in the most latest technologies now-a-days like Cloud(Azure,AWS,GCP),Data Engineering,Data Science,Docker and Kubernetes,Data Visualization,Business Analyst,Project Management. At ForumDE, we understand the importance of staying ahead of the curve, constantly adapting, and honing our skills to meet the dynamic needs of the industry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/assets/logo_new.png" />
        <meta name="description" content="This is the description of my website." />
        <meta property="og:title" content="My Website Title" />
        <meta property="og:description" content="This is the description of my website." />
        <meta property="og:image" content="/assets/logo_new.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My Website Title" />
        <meta name="twitter:description" content="This is the description of my website." />
        <meta name="twitter:image" content="/assets/logo_new.png" />
        <title>My Website Title</title>
      </Head>
      <body className={inter.className}>
     
        <main>{children}</main>
      
      </body>
    </html>
  );
}
