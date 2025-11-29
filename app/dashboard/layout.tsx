import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Auth Demo Dashboard",
};

export default function DashboardLayout({children}: {children: React.ReactNode}) {
    return (
        <section>
            {children}
        </section>
    );
}