import Link from "next/link"
import { FaSignInAlt } from "react-icons/fa"

function Navbar() {
    const li = <>
        <Link href="/" className="">Home</Link>
        <Link href="/allpets">All Pets</Link>
    </>
    const liuser = <>
        <Link href="/">Dashbord</Link>
        <Link href="/allpets">Profile</Link>
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
            <div className="navbar-center hidden lg:flex text-white">
                <ul className="menu menu-horizontal px-1 flex gap-4 text-[#d0bcff]">
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