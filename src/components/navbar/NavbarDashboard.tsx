// import { useAuth } from "@/hooks/use-auth";
import usePath from "@/hooks/usePath";
import { getUserData } from "@/utils/localStorageHelper";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  const pageName = usePath();
  // const profile = useAuth();
  const user = getUserData();
  return (
    <nav>
      <div className="w-full px-10 py-2 flex justify-end md:justify-between shadow-md items-center border-b">
        <div className="hidden md:block font-semibold border p-3 rounded-lg bg-slate-100">
          {pageName}
        </div>
        <div className="flex items-center gap-2">
          <p className="font-semibold">{user.name}</p>
          <Avatar className="w-12 h-12 md:block">
            <AvatarImage src={user.imageUrl} />
            <AvatarFallback>{user.name.slice(0, 1)}</AvatarFallback>
          </Avatar>
          {/* <img src={user.imageUrl} alt="profile" className="w-14 md:block" /> */}
        </div>
      </div>
    </nav>
  );
}
