import { UserRound } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const FloatingAboutButton = () => {
  const { pathname } = useLocation();
  if (pathname === "/about") return null;

  return (
    <Link
      to="/about"
      aria-label="About Koteshwar"
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[hsl(38,92%,55%)] px-4 py-3 text-[hsl(220,30%,8%)] shadow-2xl ring-1 ring-black/10 transition-all hover:scale-105 hover:bg-[hsl(38,92%,60%)] md:bottom-8 md:right-8"
    >
      <UserRound className="h-5 w-5" />
      <span className="hidden text-sm font-semibold tracking-wide sm:inline">About Me</span>
    </Link>
  );
};

export default FloatingAboutButton;
