import NavbarHome from "@/components/menus/NavbarHome";

export default function RootLayout({ children }) {
    return (
        <>
            <NavbarHome />
            <main>
                {children}
            </main>
        </>
    );
}