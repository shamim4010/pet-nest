'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaSignInAlt } from "react-icons/fa"

function Navbar() {
    const pathName = usePathname();
    const li = <>
        <Link href="/" className={`flex flex-col gap-2 ${pathName === '/' && 'border-b border-[#d0bcff]'}`}>Home</Link>
        <Link href="/allpets" className={`flex flex-col gap-2 ${pathName === '/allpets' && 'border-b border-[#d0bcff]'}`}>All Pets</Link>
    </>
    const liuser = <>
        <Link href="/dashboard" className={`flex flex-col gap-2 ${pathName === '/dashboard' && 'border-b border-[#d0bcff]'}`}>Dashboard</Link>
        <Link href="/profile" className={`flex flex-col gap-2 ${pathName === '/profile' && 'border-b border-[#d0bcff]'}`}>Profile</Link>
    </>
    return (
        <div className="navbar glass-level-1 fixed z-1">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn border-none lg:pointer-events-none hover:scale-[0.9]">
                        <p className="text-2xl text-[#d0bcff]">PetNest</p>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {li}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-4 w-full text-[#d0bcff]">
                    {li}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn border-none bg-[#d0bcff]"><FaSignInAlt /> Login</a>
            </div>
        </div>
    )
}

export default Navbar