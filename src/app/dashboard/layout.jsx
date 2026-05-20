import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";

export default function MainLayout({ children }) {
    return (
        <>
            <Navbar />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </>
    );
}