import type { Metadata } from "next";
import "./globals.css";
import { ReduxProvider } from "./StoreProvider";
import { Toaster } from "react-hot-toast";

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
      <body>
        <ReduxProvider>
        <Toaster position="top-right" reverseOrder={false} />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
