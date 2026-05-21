
import Footer from "@/components/shared/footer/Footer";
import DashBoardNavbar from "@/components/shared/navbar/DashBoardNavbar";

export default function MainLayout({ children }) {
    return (
        <>
            <DashBoardNavbar />
            <main className="flex-1">
                {children}
            </main>
            <Footer />    
        </>
    );
}