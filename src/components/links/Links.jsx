"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";



export default function NavLink({link}) {
  const pathName = usePathname()
  return (
    <Link className={`${pathName === link.path && "bg-white text-background px-4 py-2 rounded"}`} href={link.path} key={link.title}>{link.title}</Link>
  )
}