import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Nest Dashboard",
  description: "Nest Dashboard for all users",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex bg-gray-30">
        <Sidebar />
         <div className="w-full">
            <Header />
              {children}
         </div>
        </body>
    </html>
  );
}
