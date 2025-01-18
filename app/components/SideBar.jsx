"use client";
import Link from "next/link";
import React from "react";
import { links } from "../lib/data";
import { SideBarImage } from "./SideBarImage";
import { usePathname } from "next/navigation";
import Image from "next/image";

export const SideBar = () => {
  const pathName = usePathname();
  return (
    <div className="sidebar border-start shadow-sm">
      <SideBarImage />
      <hr />
      <ul className="nav flex-column gap-5">
        {links.map(({ label, icon, route }) => {
          const isActive =
            pathName === route || pathName.startsWith(`${route}/`);
          return (
            <li className="nav-item" key={label}>
              <Link
                className={
                  isActive ? "nav-link active fw-bold text-warning" : "nav-link"
                }
                href={route}
              >
                <div className="d-flex justify-content-evenly">
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
