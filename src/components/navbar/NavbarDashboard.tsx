import { useAuth } from "@/hooks/use-auth";
import usePath from "@/hooks/usePath";

export default function Navbar() {
  const pageName = usePath();
  const profile = useAuth();
  return (
    <nav>
      <div className="w-full px-10 py-2 flex justify-end md:justify-between shadow-md items-center border-b">
        <div className="hidden md:block font-semibold border p-3 rounded-lg bg-slate-100">
          {pageName}
        </div>
        <div className="flex items-center gap-2">
          <p className="font-semibold">{profile.userName}</p>
          <img
            src="https://media.istockphoto.com/id/483627817/photo/showing-off-his-pearly-whites.jpg?s=612x612&w=0&k=20&c=gk6aVVGp52YFx1ZzPVQplGc7JL5zkrfxQTuLjIn2RU8="
            alt="profile"
            className="w-14 md:block"
          />
        </div>
      </div>
    </nav>
  );
}
