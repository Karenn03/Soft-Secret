"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const pathname = usePathname();
    const [openDropdown, setOpenDropdown] = useState(false);

    const navigation = [
        {
            name: "Talento humano",
            icon: <Icon icon="streamline-ultimate:human-resources-businessman" width="24" height="24" />,
            children: [
                {
                    href: "/module1",
                    name: "Gestión",
                    icon: <Icon icon="streamline-ultimate:human-resources-businessman" width="20" height="20" />,
                },
                {
                    href: "/module2",
                    name: "Formación y desarrollo",
                    icon: <Icon icon="fluent-mdl2:product" width="20" height="20" />,
                },
                {
                    href: "/module3",
                    name: "Provisión",
                    icon: <Icon icon="fluent-mdl2:product" width="20" height="20" />,
                },
            ],
        },
        {
            href: "/module4",
            name: "Pensiones",
            icon: (
                <Icon icon="healthicons:old-man-outline" width="24" height="24" />
            ),
        },
        {
            href: "/module5",
            name: "Administración de salarios",
            icon: <Icon icon="vaadin:cash" width="24" height="24" />,
        },
        {
            href: "/module6",
            name: "Seguridad y salud en el trabajo",
            icon: <Icon icon="ix:helmet-safety" width="24" height="24" />,
        },
        {
            href: "/module7",
            name: "Administración de documentos",
            icon: (
                <Icon icon="ph:files-duotone" width="24" height="24" />
            ),
        },
        {
            href: "#",
            name: "Vivienda",
            icon: (
                <Icon icon="mdi:house-outline" width="24" height="24" />
            ),
        },
        {
            href: "#",
            name: "Relaciones sindicales",
            icon: <Icon icon="streamline-ultimate:labor-hands-action" width="24" height="24" />,
        },
        {
            href: "#",
            name: "Servicio médico asistencial",
            icon: <Icon icon="fluent:doctor-48-regular" width="24" height="24" />,
        },
        {
            href: "#",
            name: "Gestión administrativa",
            icon: <Icon icon="clarity:administrator-line" width="24" height="24" />,
        },
    ];

    return (
        <nav className="fixed top-10 left-0 pt-14 h-full bg-gray-50 flex flex-col w-20 sm:w-84 font-work-sans">
            <div className="flex-1 overflow-y-auto">
                <ul className="px-2 sm:px-7 font-medium text-base flex-1 text-neutral-800">
                    <li className="my-3">
                        <button
                            onClick={() => setOpenDropdown(!openDropdown)}
                            className="flex items-center gap-x-3 py-3 px-3 rounded-lg justify-center sm:justify-start duration-150 hover:bg-[#F2F2F3] hover:scale-105 hover:translate-x-1 w-full"
                        >
                            <div>{navigation[0].icon}</div>
                            <span className="hidden sm:inline">{navigation[0].name}</span>
                            <Icon
                                icon={openDropdown ? "mdi:chevron-up" : "mdi:chevron-down"}
                                width="20"
                                height="20"
                                className="ml-auto hidden sm:inline"
                            />
                        </button>
                        {openDropdown && (
                            <ul className="ml-6 mt-2 space-y-1">
                                {navigation[0].children.map((child, idx) => {
                                    const isActive = pathname === child.href;
                                    return (
                                        <li key={idx}>
                                            <Link
                                                href={child.href}
                                                className={`flex items-center gap-x-2 py-2 px-2 rounded-lg duration-150 hover:bg-[#F2F2F3]
                                                ${isActive ? "bg-linear-to-r from-lime-600 to-[#39A900] text-white shadow-md" : ""}`}
                                            >
                                                {child.icon}
                                                <span className="hidden sm:inline">{child.name}</span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </li>
                    {navigation.slice(1).map((item, idx) => {
                        const isActive = pathname === item.href;
                        return (
                            <li key={idx} className="my-2">
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-x-3 py-3 px-3 rounded-lg justify-center sm:justify-start duration-150
                                    hover:bg-[#F2F2F3] hover:scale-105 hover:translate-x-1
                                    ${isActive ? "bg-linear-to-r from-lime-600 to-[#39A900] text-white shadow-md shadow-indigo-500/20" : ""}`}
                                >
                                    <div>{item.icon}</div>
                                    <span className="hidden sm:inline">{item.name}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;

