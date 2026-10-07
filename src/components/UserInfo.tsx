"use client";

import { authClient } from '@/lib/auth-client';


const UserInfo = () => {
    const { data : session }= authClient.useSession();
    const user = session?.user;
    console.log(user);
 const handleSignOut = async () => {
    await authClient.signOut(); }

    return (
          <div className="absolute right-4 top-4 flex items-center gap-3 text-sm">
      {user ? (
        <div className="flex flex-col items-center gap-2">

            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                <img
                  alt="Tailwind-CSS-Avatar-component"
                  src={user?.image as string}
                />
              </div>
            </div>
          

          <h2>{user?.name}</h2>

          <button  className="btn btn-error btn-xs" onClick={handleSignOut}>
            Signout
          </button>
        </div>
      ) : (
        <div>
     
            <button className="btn btn-ghost text-neutral-700 transition-colors hover:text-red-700">
              সাইন ইন
            </button>
         
         
        
            <button className="btn  bg-red-700 px-3 py-1.5 font-semibold text-white transition-colors hover:bg-red-800">
              সাইন আপ
            </button>
        
        </div>
      )}
    </div>
  );
};
export default UserInfo;