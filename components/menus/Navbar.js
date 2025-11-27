"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/img/logoSenaBlanco.png";

export default function Navbar() {
    const [state, setState] = useState(false);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 z-50 bg-gradient-to-r from-[#39A900] to-[#398F0D] backdrop-blur-sm w-full md:text-sm md:border-none ${state ? "shadow-lg rounded-b-xl md:shadow-none" : ""
                    }`}
            >
                <div className="items-center gap-x-10 px-4 max-w-8xl mx-auto md:flex md:px-8 font-work-sans">
                    <div className="flex items-center justify-between py-2 md:py-4 md:block">
                        <Link href="/home">
                            <Image src={logo} className="h-12 w-12" alt="Coffee Tech logo" />
                        </Link>
                    </div>
                    <div
                        className={`nav-menu flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center space-y-6 md:flex md:space-x-1 md:space-y-0">
                            <li className="flex-1 items-center justify-end gap-x-6 space-y-3 md:flex md:space-y-0">
                                <Link
                                    href="/auth/signUp"
                                    className="block py-2 px-4 font-semibold text-base text-center text-white bg-white/40 rounded-lg shadow md:inline transition-all duration-300 hover:shadow-lg hover:bg-white/55 hover:-translate-y-1"
                                >
                                    Inicia sesión
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {state ? (
                <div
                    className="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden"
                    onClick={() => setState(false)}
                ></div>
            ) : (
                ""
            )}
        </>
    );
}