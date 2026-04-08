// app/(dashboard)/layout.tsx
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      {/* LEFT SIDEBAR */}
      <div className="w-[250px] bg-gray-100 border-r">
        <Sidebar />
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex-1 flex flex-col">
        {/* TOP HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        <main className="flex-1 p-6 bg-white overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
