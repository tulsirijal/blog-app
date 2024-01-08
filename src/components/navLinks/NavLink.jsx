"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NavLink from "../links/Links";
import { useState } from "react";
import { handleGithubSignOut } from "@/lib/action";

export default function NavLinks({session}) {
  const pathName = usePathname();
  const [open, setOpen] = useState();
  const links = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/contact",
      title: "Contact",
    },
    {
      path: "/blog",
      title: "Blog",
    },
  ];
  // Temporary
  const isAdmin = false;
  const isSession = session;
  console.log(session)
  return (
    <div className="">
      <div className=" hidden md:flex md:flex-row md:items-center md:gap-2">
        {links.map((link) => {
          return <NavLink key={link.title} link={link} />;
        })}
        {isSession?.user?.email ? (
          <>
            {isAdmin && <NavLink link={{ path: "/admin", title: "Admin" }} />}
            <form action={handleGithubSignOut}>
              <button className="hover:bg-btn px-2 py-2">Logout</button>
            </form>
          </>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
      <button onClick={() => setOpen((prev) => !prev)} className="md:hidden ">
        <Image src="/menu.png" height={30} width={30}  alt=""/>
      </button>
      {open && (
        <div className="md:hidden absolute w-[250px] top-[50px] bg-bgSoft h-[calc(100vh-100px)]  z-10 right-0 flex flex-col gap-4 justify-center items-center">
          {links.map((link) => {
            return <NavLink link={link} key={link.title} />;
          })}
        </div>
      )}
    </div>
  );
}
