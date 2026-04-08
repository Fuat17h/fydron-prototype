// components/Header.tsx
export default function Header() {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <h2 className="font-semibold">Client Overview</h2>

      <div className="flex gap-4 items-center">
        <input placeholder="Search..." className="border px-3 py-1 rounded" />
        🔔
      </div>
    </div>
  );
}
