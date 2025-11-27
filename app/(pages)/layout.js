import Navbar from "@/components/menus/Navbar";

export default function RootLayout({ children }) {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
        </>
    );
}