/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
// import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/profile">Profile</Link></li>
                        <li><Link href="/blogs">All Blogs</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Blogs</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                    <li className="mx-2"><Link href="/home">Home</Link></li>
                    <li className="mx-2"><Link href="/profile">Profile</Link></li>
                    <li className="mx-2"><Link href="/blogs">All Blogs</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {/* <LoginLink>Sign in</LoginLink> */}
                <button>Login</button>
                {/* <RegisterLink>Sign up</RegisterLink> */}
            </div>
        </div>
    );
};

export default Navbar;