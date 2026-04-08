"use client";
// import DashboardLayout from "./(dashboard)/layout";
// import DashboardPage from "./(dashboard)/dashboard/page";
import { useRouter } from "next/navigation";
import { isLoggedIn } from "@/lib/auth";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  const [loading] = useState(true);

  useEffect(() => {
    if (isLoggedIn()) {
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  }, [router]);

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      {loading && <p>Redirecting...</p>}
    </main>
  );

  // return (
  //   <main>
  //     <DashboardLayout>
  //       <DashboardPage />
  //     </DashboardLayout>
  //   </main>
  // );
}
