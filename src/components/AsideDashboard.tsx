import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/guestList-logo.png";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function AsideDashboard({ ...props }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div {...props}>
      <div
        onClick={() => navigate("/")}
        className="flex flex-col items-center cursor-pointer pt-4"
      >
        <img src={Logo} className="w-25" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-bold text-slate-200 dark:text-slate-300 hidden md:block">
          Guest List
        </span>
      </div>
      <TooltipProvider>
        <div className="w-[90%] mx-auto mt-5">
          <div className="flex flex-col items-start gap-2 text-slate-400 font-medium">
            <Tooltip>
              <TooltipTrigger
                className={`w-full p-2 hover:bg-slate-700 hover:text-white rounded-md cursor-pointer ${
                  location.pathname === "/dashboard" &&
                  "bg-slate-700 text-white"
                } flex items-center gap-2 justify-center md:justify-start`}
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                <i className="fas fa-home"></i>
                <h1 className="hidden md:block">Dashboard</h1>
              </TooltipTrigger>
              <TooltipContent className="md:hidden">
                <p>Dashboard</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger
                className={`w-full p-2 hover:bg-slate-700 hover:text-white rounded-md cursor-pointer ${
                  location.pathname === "/dashboard/create" &&
                  "bg-slate-700 text-white"
                } flex items-center gap-2 justify-center md:justify-start`}
                onClick={() => navigate("/dashboard/create")}
              >
                <i className="fas fa-plus-square"></i>
                <h1 className="hidden md:block">Add Guest</h1>
              </TooltipTrigger>
              <TooltipContent className="md:hidden">
                <p>Add Guest</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger
                className={`w-full p-2 hover:bg-slate-700 hover:text-white rounded-md cursor-pointer ${
                  location.pathname === "/dashboard/profile" &&
                  "bg-slate-700 text-white"
                } flex items-center gap-2 justify-center md:justify-start`}
                onClick={() => navigate("/dashboard/profile")}
              >
                <i className="fas fa-user"></i>
                <h1 className="hidden md:block">Profile</h1>
              </TooltipTrigger>
              <TooltipContent className="md:hidden">
                <p>Profile</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger
                className={`w-full p-2 hover:text-red-800 rounded-md cursor-pointer flex items-center gap-2 text-red-700 justify-center md:justify-start`}
              >
                <i className="fas fa-sign-out-alt"></i>
                <h1 className="hidden md:block">Sign Out</h1>
              </TooltipTrigger>
              <TooltipContent className="md:hidden">
                <p>Logout</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </TooltipProvider>
    </div>
  );
}
