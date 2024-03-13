import Header from "@/components/Header";
import Sidebar from "@/components/sidebar/Sidebar";

export default function MainLayout({ children }: Readonly<{
    children: React.ReactNode
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