import { Header } from "@/components/header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col antialised">
        <Header />
        <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
          {children}
        </div>
    </div>
  );
}
