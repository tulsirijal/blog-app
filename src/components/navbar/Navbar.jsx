
import Link from "next/link";

import NavLinks from "../navLinks/NavLink";
import { auth } from "@/lib/auth";



export default async function Navbar() {
  const session = await auth()
  return (
    <div className="w-full max-w-[1367px] mx-auto flex flex-row justify-between items-center text-white px-8 py-4">
      <Link href='/' className="text-2xl font-bold">Logo</Link>
      <NavLinks session={session} />
    </div>
  )
}
