'use client'
import Loading from "@/app/(main)/loading";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaCat, FaHome, FaHSquare, FaSignInAlt, FaSignOutAlt } from "react-icons/fa"

function Navbar() {
    const pathName = usePathname();

    const { data: session, isPending } = authClient.useSession()
    console.log(session)

    const userInfo = session?.user;

    const logOut = async () => {
        await authClient.signOut();
        redirect('/login')
    }

    const li = <>
        <Link href="/" className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-[1.03] ${pathName === '/' ? 'bg-[#d0bcff] text-black shadow-lg shadow-[#d0bcff30] text-[#d0bcff]' : pathName === '/allpets' && 'text-[#4ade80]'}`}>
            <FaHome className="text-lg" />
            Home
        </Link>

        <Link href="/allpets" className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-[1.03] ${pathName === '/allpets' ? 'bg-[#4ade80] text-white shadow-lg shadow-[#bcffbc]' : 'text-[#d0bcff] hover:text-[#d0bcff]'}`}>
            <FaCat />
            All Pets
        </Link>
    </>

    const liuser = <>
        <Link href="/dashboard" className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-[1.03] ${pathName === '/dashboard' ? 'bg-[#d0bcff] text-black shadow-lg shadow-[#d0bcff30]' : pathName === '/allpets' && 'text-[#4ade80]'}`}>
            <FaHSquare />            
            Dashboard
        </Link>
    </>

    const liprofile = <>
        <Link href="/profile" className={`flex items-center justify-center gap-3 px-3 py-2 rounded-2xl transition-all duration-300 hover:bg-[#d0bcff12] border border-transparent hover:border-[#d0bcff20] ${pathName === '/profile' ? 'bg-[#d0bcff] text-black shadow-lg shadow-[#d0bcff30]' : 'text-[#d8c9ff]'}`}>
            <div className='w-11 h-11 border border-indigo-500 rounded-full bg-[#221728] p-1'>
                <Image src={userInfo?.image} width={100} height={100} alt={userInfo?.name} className="object-cover w-full h-full rounded-full" />
            </div>
            <div className="flex flex-col leading-none">
                <span className="font-medium text-sm">
                    {userInfo?.name}
                </span>
            </div>
        </Link>
    </>

    return (
        <div className="navbar glass-level-1 fixed z-1">
            <div className="navbar-start">
                <div className="dropdown">

                    <div
                        tabIndex={0}
                        role="button"
                        className="btn border-none bg-transparent hover:bg-[#2e2131] hover:scale-[0.95] duration-300 md:pointer-events-none"
                    >
                        <p className={`text-2xl font-bold ${pathName === '/allpets' ? 'text-[#4ade80]' : 'text-[#d0bcff]'} tracking-wide`}>
                            PetNest
                        </p>
                    </div>

                    <ul
                        tabIndex={0}
                        className={`menu dropdown-content mt-4 bg-black/40 backdrop-blur-md rounded-2xl w-60  border border-[#ffffff12] shadow p-4 z-[999] ${pathName === '/allpets' ? 'text-[#4ade80]' : 'text-[#d0bcff]'}`}
                    >
                        <div className="flex flex-col gap-4">
                            {li}
                            {userInfo && liuser}
                        </div>
                        <div className="">
                            {userInfo && liprofile}
                        </div>
                    </ul>

                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className={`menu menu-horizontal px-1 flex gap-4 w-full ${pathName === '/allpets' ? 'text-[#4ade80]' : 'text-[#d0bcff]'}`}>
                    {li}
                    {userInfo && liuser}
                </ul>
            </div>
            <div className="navbar-end">
                {isPending ? <Loading /> : userInfo ? <div className='flex justify-center items-center gap-4'><div className='w-10 h-10 flex justify-center items-center overflow-hidden border-2 border-indigo-500 rounded-full hidden sm:block'><Link href="/profile"><Image src={userInfo?.image} width={100} height='100' alt={userInfo?.name} /></Link></div> <button onClick={logOut} className={`btn border-none text-white ${pathName === '/allpets' ? 'bg-[#4ade80]' : 'bg-[#d0bcff]'}`}> <FaSignOutAlt /> LogOut </button></div> : <Link href="/login" className={`btn border-none ${pathName === '/allpets' ? 'bg-[#4ade80]' : 'bg-[#d0bcff]'}`}><FaSignInAlt /> Login</Link>}
            </div>
        </div>
    )
}

export default Navbar