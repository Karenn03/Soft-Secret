"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/img/logoSenaBlanco.png";

export default function NavbarDashboard() {
    const [state, setState] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const [hasNotifications] = useState(true);
    const [showAllNotifications, setShowAllNotifications] = useState(false);

    const toggleNotifications = () => {
        setIsNotificationsOpen(!isNotificationsOpen);
        setShowAllNotifications(false);
    };

    const notifications = [
        {
            title: "Notificación 1",
            text: "Mensaje de la notificación 1.",
        },
        {
            title: "Notificación 2",
            text: "Mensaje de la notificación 2.",
        },
        {
            title: "Notificación 3",
            text: "Mensaje de la notificación 3.",
        },
        {
            title: "Notificación 4",
            text: "Mensaje de la notificación 4.",
        },
        {
            title: "Notificación 5",
            text: "Mensaje de la notificación 5.",
        }
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 z-50 font-work-sans bg-linear-to-r from-[#39A900] to-lime-600 backdrop-blur-sm w-full md:text-sm md:border-none ${state ? "shadow-lg rounded-b-xl md:shadow-none" : ""
                    }`}
            >
                <div className="items-center gap-x-10 px-4 max-w-8xl mx-auto md:flex md:px-8 font-work-sans">
                    <div className="flex items-center justify-between py-2 md:py-4 md:block">
                        <Link href="/home">
                            <Image src={logo} className="h-12 w-12" alt="SENA Logo" />
                        </Link>
                    </div>
                    <div
                        className={`nav-menu flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? "block" : "hidden"
                            }`}
                    >
                        <div className="flex items-center justify-end gap-x-4">
                            {/* Notificaciones */}
                            <div className="relative flex justify-end">
                                <button
                                    onClick={toggleNotifications}
                                    aria-haspopup="true"
                                    aria-expanded={isNotificationsOpen}
                                    className="group relative h-9 w-9 rounded-full bg-white/20 text-white ring-1 ring-white/30 hover:bg-white/30 flex items-center justify-center shadow-sm backdrop-blur transition-all duration-300 hover:scale-105"
                                >
                                    <i className="fas fa-bell" />
                                    {hasNotifications && (
                                        <span className="absolute top-0.5 right-0.5 h-3 w-3 rounded-full bg-red-500 ring-2 animate-pulse" />
                                    )}
                                    {isNotificationsOpen && (
                                        <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 h-4 w-4 rotate-45 border-t border-l border-black/10 bg-white/90 z-30" />
                                    )}
                                </button>
                                {isNotificationsOpen && (
                                    <div className="absolute top-full right-0 z-20 mt-2 w-88">
                                        <div className="rounded-2xl shadow-2xl backdrop-blur-xl border border-black/10 bg-white/90 flex flex-col h-fit">
                                            {/* Encabezado */}
                                            <div className="sticky top-0 flex items-center justify-between rounded-t-2xl border-t border-t-white/90 bg-linear-to-r from-[#39A900] to-lime-600 px-4 py-3 text-white shadow-sm">
                                                <span className="text-sm font-semibold tracking-wide">Notificaciones</span>
                                                <i className="fas fa-bell" />
                                            </div>
                                            {/* Scroll condicional */}
                                            {notifications.length > 0 ? (
                                                <>
                                                    <div className={`px-2 pt-2 transition-all duration-300 ${showAllNotifications ? "overflow-y-auto max-h-80" : "overflow-visible"}`} >
                                                        {notifications.map((notification, index) => (
                                                            <div
                                                                key={index}
                                                                className="group relative mb-2 flex cursor-pointer items-start rounded-xl p-3 transition-all duration-200 last:mb-0 hover:bg-gray-50/80"
                                                            >
                                                                <div className="mr-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-blue-50 to-cyan-50 ring-1 ring-black/10 shadow">
                                                                    <i className="fas fa-bell text-[#024A70]" />
                                                                </div>
                                                                <div className="flex min-w-0 flex-col">
                                                                    <span className="truncate text-sm font-semibold text-gray-900">
                                                                        {notification.title}
                                                                    </span>
                                                                    <span className="mt-1 text-xs leading-5 text-gray-600">
                                                                        {notification.text}
                                                                    </span>
                                                                </div>
                                                                <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 ring-1 transition-opacity duration-200 group-hover:opacity-100 ring-black/10" />
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="mt-2 rounded-b-2xl px-3 pb-3 pt-2 bg-gray-50/80">
                                                        <button
                                                            onClick={() => setShowAllNotifications(!showAllNotifications)}
                                                            className="w-full inline-flex items-center justify-center rounded-lg px-3 py-1.5 text-sm font-medium shadow-sm transition bg-linear-to-r from-[#39A900] to-lime-600 text-white hover:brightness-110"
                                                        >
                                                            {showAllNotifications ? "Ver todas" : "Ver menos"}
                                                        </button>
                                                    </div>
                                                </>
                                            ) : (
                                                <div className="flex flex-col items-center justify-center px-8 py-10 bg-transparent">
                                                    <div className="mb-4 rounded-full p-4 ring-1 bg-gray-50 ring-black/10">
                                                        <i className="fas fa-bell-slash text-2xl text-gray-400" />
                                                    </div>
                                                    <h2 className="mb-1 text-base font-semibold text-gray-800">
                                                        Sin Notificaciones
                                                    </h2>
                                                    <p className="text-center text-sm text-gray-600">
                                                        No tienes notificaciones pendientes
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="h-8 border-r border-white/30" />
                            {/* Perfil */}
                            <div className="flex items-center">
                                <div className="relative">
                                    <div
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-lime-500 to-lime-600 transition-transform duration-300 hover:scale-105">
                                        <span className="text-xs font-medium text-white">JD</span>
                                        <span className="absolute -right-0.5 -bottom-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-400"></span>
                                    </div>
                                </div>
                                <div className="ml-3 hidden md:block">
                                    <p className="text-sm font-medium text-white">John Doe</p>
                                    <p className="text-xs text-gray-200">Administrador</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav >
            {state && (
                <div
                    className="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden"
                    onClick={() => setState(false)}
                ></div>
            )
            }
        </>
    );
}