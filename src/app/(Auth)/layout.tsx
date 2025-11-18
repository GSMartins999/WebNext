import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página de Login",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full auth-wrapper">
      {children}
    </div>
  );
}
