import { Utensils } from 'lucide-react';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid min-h-screen grid-cols-2">

        <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted pd-10 text-muted-foreground">
          <div className="flex items-center gap-3 text-lg font-medium text-foreground">
            <Utensils className="h-5 w-5" />
            <span>full belly</span>
          </div>
          <footer>
            Painel do parceiro &copy; full belly - {new Date().getFullYear()}
          </footer>
        </div>

        
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">Authentication</h1>
        <div className="mt-4">{children}</div>
      </div>

    </div>
  );
}
