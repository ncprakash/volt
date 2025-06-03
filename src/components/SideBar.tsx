"use client";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

export default function SideBar() {

  const pathname = usePathname();
  const { isLoaded, isSignedIn, user } = useUser();
    console.log("User",user)
  const [isOpen, setIsOpen] = useState(false);

  if (!isLoaded) return <div className="p-4">Loading...</div>;
  if (!isSignedIn) return <div className="p-4">Please sign in</div>;
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Devices", href: "/Device" },
    { label: "Report", href: "/Report" },
    { label: "Setting", href: "/setting" },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 p-2 m-2 rounded-md bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 z-50"
        aria-label="Toggle menu"
      >
        {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
           fixed top-0 left-0 max-h-full w-64 bg-white shadow-md z-40 transform
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:block
        `}
      >
        <div className="p-4 border-b">
          <h1 className="text-xl font-semibold text-gray-800">
            Hello, {user.username} 👋
          </h1>
        </div>

        <nav className="flex flex-col p-4 space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-medium rounded p-2 transition-colors duration-200 ${
                  isActive
                    ? "bg-gray-800 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-30 md:hidden"
        />
      )}
    </>
  );
}

