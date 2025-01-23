"use client";
import Link from "next/link";
import React from "react";
import { links } from "../lib/links";
import { SideBarImage } from "./SideBarImage";
import { usePathname } from "next/navigation";
import Image from "next/image";

export const SideBar = () => {
  const pathName = usePathname();
  return (
    <div className="sidebar shadow-end-lg mb-5 border-0 p-3 bg-light">
      <SideBarImage />

      <ul className="nav flex-column gap-4">
        {links.map(({ label, icon, route }) => {
          const isActive =
            pathName === route || pathName.startsWith(`${route}/`);
          return (
            <li className="nav-item" key={label}>
              <Link
                className={
                  isActive
                    ? "nav-link active text-secondary"
                    : "nav-link text-dark"
                }
                href={route}
              >
                <div className="d-flex justify-content-start align-items-center gap-4">
                  <Image src={icon} alt="Image" width={24} height={24} />
                  {label}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
