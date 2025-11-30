import NavbarDashboard from "@/components/menus/NavbarDashboard";
import Sidebar from "@/components/menus/Sidebar";

export default function RootLayout({ children }) {
    return (
        <>
            <NavbarDashboard />
            <Sidebar />
            <main className="pt-[90px] ml-20 sm:ml-80 p-6">
                {children}
            </main>
        </>
    );
}