
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1> Cabeçalho </h1>
        <div>
          {children}
        </div>
    </>
  );
}
