import Header from "../../components/Layouts/Header";
import "./globals.css";

export const metadata = {
    title: "Thaw",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-[#F9F9FA]">
                <Header />
                <div className="mx-4 2xl:mx-auto 2xl:w-[1440px] overflow-hidden h-full">{children}</div>
            </body>
        </html>
    );
}
