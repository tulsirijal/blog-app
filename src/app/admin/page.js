import AdminPostForm from "@/components/adminPostForm/AdminPostForm";
import AdminPosts from "@/components/adminPosts/AdminPosts";
import AdminUserForm from "@/components/adminUserForm/AdminUserForm";
import AdminUsers from "@/components/adminUsers/AdminUsers";


export default function Admin() {
  return (
    <div className="w-11/12 max-w-[1367px] mx-auto flex flex-col justiy-center sm:justify-center sm:gap-x-10 items-center  sm:flex-row sm:flex-wrap text-textSoft ">
        <div className="w-11/12 max-w-[600px]">
          <AdminPosts />
        </div>
        <div className="w-11/12 max-w-[600px]">
          <AdminPostForm />
        </div>
        <div className="w-11/12 max-w-[600px]">
          <AdminUsers />
        </div>
        <div className="w-11/12 max-w-[600px]">
          <AdminUserForm />
        </div>
    </div>
  )
}
