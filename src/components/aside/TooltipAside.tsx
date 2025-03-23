import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useNavigate, useLocation } from "react-router-dom";

type Tooltip = {
  path?: string;
  label: string;
  type?: "signOut";
  icon: string;
};

export default function TooltipAside({ path, label, type, icon }: Tooltip) {
  const navigate = useNavigate();
  const location = useLocation();
  return type === "signOut" ? (
    <Tooltip>
      <TooltipTrigger
        className={`w-full p-2 hover:text-red-800 rounded-md cursor-pointer flex items-center gap-2 text-red-700 justify-center md:justify-start`}
      >
        <i className={icon}></i>
        <h1 className="hidden md:block">{label}</h1>
      </TooltipTrigger>
      <TooltipContent className="md:hidden">
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  ) : (
    <Tooltip>
      <TooltipTrigger
        className={`w-full p-2 hover:bg-slate-700 hover:text-white rounded-md cursor-pointer ${
          location.pathname === path && "bg-slate-700 text-white"
        } flex items-center gap-2 justify-center md:justify-start`}
        onClick={() => {
          navigate(`${path}`);
        }}
      >
        <i className={icon}></i>
        <h1 className="hidden md:block">{label}</h1>
      </TooltipTrigger>
      <TooltipContent className="md:hidden">
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  );
}
