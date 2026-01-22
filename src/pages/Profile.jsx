import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
function Profile() {
  const { user, isAuthenticated, logout, isLoading } = useAuth0();
  console.log(user, isAuthenticated, isLoading);
  if (isLoading) {
    return <div  className="w-96 m-auto pt-20 text-2xl" > Loading.........</div>;
  }
  return (
    <div   className="w-[700px] shadow-xl bg-white p-5  m-auto mt-10" >
      {!isLoading && isAuthenticated && user ? (
        <div className="flex">
          <div>
            <img   className="w-72  rounded-2xl " src={user?.picture} alt="user_image" />
          </div>
          <div  className="p-5  space-y-6" >
            <h1  className="text-2xl" >Name:{user?.name}</h1>
            <h1  className="text-2xl" >Email:{user?.email}</h1>
            <h1  className="text-2xl" >Email Verified :{user?.email_verified && "true"}</h1>
            <button 
            
               onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
              
            
              className="bg-red-600  p-3 text-white font-serif w-28 text-2xl" >Logout</button>
          </div>
        </div>
      ) : (
        <div>
          <NavLink   className='bg-orange-600 p-3  text-white rounded-sm'  to="/login">Go to login page </NavLink>
        </div>
      )}
    </div>
  );
}

export default Profile;