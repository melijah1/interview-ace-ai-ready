
import { Outlet, NavLink } from "react-router-dom";
import { Home, MessageSquare, BookOpen, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Layout = () => {
  return (
    <div className="mobile-container relative pb-16">
      <Outlet />
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-gray-900/95 backdrop-blur-lg border-t border-purple-500/20 h-16 flex items-center justify-around shadow-lg">
        <NavTab to="/home" icon={<Home size={24} />} label="Home" />
        <NavTab to="/mock-interview" icon={<MessageSquare size={24} />} label="Interview" />
        <NavTab to="/questions" icon={<BookOpen size={24} />} label="Questions" />
        <NavTab to="/profile" icon={<User size={24} />} label="Profile" />
      </nav>
    </div>
  );
};

const NavTab = ({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <NavLink
            to={to}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center justify-center w-1/4 transition-colors",
                isActive ? "text-purple-400" : "text-gray-400"
              )
            }
          >
            {({ isActive }) => (
              <>
                <div className={isActive ? "bg-purple-500/20 p-1.5 rounded-full" : "p-1.5"}>
                  {icon}
                </div>
                <span className="text-xs mt-1">{label}</span>
              </>
            )}
          </NavLink>
        </TooltipTrigger>
        <TooltipContent>
          {label}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Layout;
