import LoginForm from "@/components/loginForm/LoginForm"
import { handleGithubSignIn, login } from "@/lib/action"
export default async function Login() {

  return (
    <div className='w-[90%] max-w-[550px] min-h-[400px] mx-auto flex flex-col items-center justify-center bg-bgSoft'>
    <h1 className="text-2xl font-bold text-center text-white">Login</h1>
      <LoginForm />
      <form action={handleGithubSignIn} className="w-11/12 self-center p-2">
        <button className="text-white bg-btn px-8 py-4 w-full">Sign in with Github</button>
      </form>
    </div>
  )
}
