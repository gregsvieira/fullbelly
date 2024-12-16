import { Donut } from 'lucide-react';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid min-h-screen grid-cols-2">

        <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted pd-10 text-muted-foreground">
          <div className="flex items-center gap-3 text-lg font-medium text-foreground">
            <Donut className="h-5 w-5" />
            <span>FullBelly</span>
          </div>
          <footer>
            &copy; FullBelly - {new Date().getFullYear()}
          </footer>
        </div>

        
      <div className="relative flex flex-col justify-center items-center">
        <div className="mt-4">{children}</div>
      </div>

    </div>
  );
}
