"use client";
import { deleteUser } from "@/lib/action";
import { getUsers } from "@/lib/data";
import Image from "next/image";

export default async function AdminUsers() {
  const users = await getUsers();
  return (
    <div className="space-y-3">
    <h1 className="text-xl font-semibold my-3">Users</h1>
      {users.map((user, i) => (
        <div key={i} className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              width={50}
              height={50}
              src={user.img || "/noavatar.png"}
              alt=""
            />
            <span className="text-md font-bold">{user.username}</span>
          </div>
          <form action={deleteUser}>
            <input type="hidden" name="id" value={user.id} />
            <button className="text-white bg-red py-1 px-4">Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
}
