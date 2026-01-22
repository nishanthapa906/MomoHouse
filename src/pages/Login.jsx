import { useAuth0 } from "@auth0/auth0-react";
import { FcGoogle } from "react-icons/fc";

function Login() {

  const { loginWithRedirect } = useAuth0();
  return (
    <div  className="border w-[500px]  bg-white rounded-sm  p-5   flex flex-col justify-center items-center gap-y-5 mt-20 m-auto" >
      <h1 className="text-3xl underline"> Login Page </h1>
      <form action=""   className="w-full text-2xl   space-y-5  " >
        <div>
          <label htmlFor="email">
            Email:-
            <br />
            <input   className="border w-full p-3 outline-none rounded-sm    "      type="email" placeholder="Enter Email..." />
          </label>
        </div>

        <div>
          <label htmlFor="password">
            Password:-
            <br />
            <input   className="border w-full  p-3 outline-none rounded-sm   "      type="password" placeholder="Enter Password..." />
          </label>
        </div>
        <button   className="border  bg-blue-400 text-white font-bold text-2xl font-serif shadow w-full  p-3 rounded-sm "  >Login</button>
      </form>

      <h1 className="text-xl" > Or Login with  </h1>

      <button
      onClick={()=>{
        loginWithRedirect();
      }}>

        <FcGoogle size={40} />

      </button>
    </div>
  );
}

export default Login;