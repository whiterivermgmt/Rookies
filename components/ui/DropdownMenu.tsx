"use client";

import Link from "next/link";
import React from "react";
import { headerData } from "@/Constants/data";
import { Phone } from "lucide-react";

interface Service {
  title: string;
  href: string;
  icon?: React.ComponentType<any>;
  description?: string;
}

interface DropdownProps {
  menuTitle: string;
}

const DropdownMenu: React.FC<DropdownProps> = ({ menuTitle }) => {
  let services: Service[] =
    headerData.find((item) => item.title === menuTitle)?.submenu || [];

  if (!services.length) return null;

  return (
    <div className="w-[520px] rounded-xl bg-gray-900 shadow-2xl overflow-hidden ring-1 ring-red-600">
      <div className="p-4 grid grid-cols-2 gap-4">
        {services.map((service) => {
          const IconComponent = service.icon || Phone;
          return (
            <Link
              key={service.title}
              href={service.href}
              className="flex items-center gap-x-4 p-4 rounded-lg bg-gray-800 hover:bg-red-600 transition transform hover:scale-105 shadow-md"
            >
              <div className="flex w-12 h-12 items-center justify-center bg-red-600 rounded-lg">
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-lg">{service.title}</span>
                <span className="text-sm text-gray-300">
                  {service.description ?? "Exciting entertainment experience."}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DropdownMenu;
