
import Footer from "@/components/shared/footer/Footer";
import DashBoardNavbar from "@/components/shared/navbar/DashBoardNavbar";

export default function MainLayout({ children }) {
    return (
        <>
            <DashBoardNavbar />
            <main className="flex-1 bg-[url('/noisebg.png')] bg-no-repeat bg-cover">
                <div className="w-full h-screen bg-white/4 backdrop-blur-3xl">
                    {children}
                </div>
            </main>
            <Footer />    
        </>
    );
}