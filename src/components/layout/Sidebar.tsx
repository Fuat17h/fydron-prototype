"use client";

import { useRouter } from "next/navigation";
import { logout } from "@/lib/auth";

export default function Sidebar() {
  const router = useRouter();

  return (
    <div
      style={{
        width: 250,
        background: "#fff",
        borderRight: "1px solid #ddd",
        padding: 20,
      }}
    >
      <h3>Fydron</h3>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li onClick={() => router.push("/dashboard")}>Dashboard</li>
        <li>Clients</li>
        <li onClick={() => router.push("/settings")}>Settings</li>
      </ul>

      <button
        style={{ marginTop: 20 }}
        onClick={() => {
          logout();
          router.push("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}
