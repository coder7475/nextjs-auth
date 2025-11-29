import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login Page",
};


export default function LoginLayout({children}: {children: React.ReactNode}) {
    return (
        <section>
            {children}
        </section>
    );
}