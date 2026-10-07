"user client";
import Image from "next/image";
import NavLinks from "./NavLinks";
import UserInfo from "./UserInfo";

export default function Header() {
  const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });
  return (
    <header className="relative mx-auto max-w-7xl px-4 py-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-2">
          <Image
            src="/logo.webp"
            alt="Bangla News 24"
            width={40}
            height={40}
            priority
          />
          <div className="min-w-0">
            <h2 className="text-lg font-bold">Bangla News24</h2>
            <p className="text-xs">{date}</p>
          </div>
        </div>
     
      </div>
      <UserInfo/>
       <NavLinks />
    </header>

   
  );
}
