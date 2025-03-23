import { useAuth } from "@/hooks/use-auth";
import usePath from "@/hooks/usePath";

export default function Navbar() {
  const pageName = usePath();
  const profile = useAuth();
  return (
    <nav>
      <div className="w-full px-10 py-2 flex justify-end md:justify-between shadow-sm items-center">
        <div className="hidden md:block">{pageName}</div>
        <div className="flex items-center gap-2">
          <p>{profile.userName}</p>
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
