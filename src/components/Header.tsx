import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/architecture", label: "Architecture" },
  { to: "/blogs", label: "Blogs" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="sticky top-0 z-50 py-2 sm:py-4 animate-slide-down">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 pill-nav px-3 sm:px-5 shadow-[0_18px_50px_-28px_hsl(var(--shadow-soft)/0.55)]">
          {/* Logo */}
          <div className="flex items-center min-w-0">
            <Link to="/" className="group flex items-center gap-1.5 sm:gap-2">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <span className="font-bold text-base sm:text-lg">K</span>
              </div>
              <span className="text-base sm:text-xl font-bold font-serif truncate text-foreground">Koteshwar</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 rounded-full bg-muted/35 p-1 border border-border/40">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `text-sm font-medium rounded-full px-3.5 py-2 transition-all duration-300 ${
                    isActive ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-card/60"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-muted/40 hover:bg-muted transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
              ) : (
                <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
              )}
            </button>
            
            <a href="https://github.com/KoteshwarChinnolla" target="_blank" rel="noopener noreferrer">
              <Button className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-2 hover:scale-105 transition-all">
                GitHub
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-full bg-muted/40 hover:bg-muted transition-all"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 p-4 rounded-3xl border border-border bg-card/95 backdrop-blur-xl animate-scale-in shadow-[0_18px_50px_-30px_hsl(var(--shadow-soft)/0.6)]">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-sm font-medium rounded-2xl px-4 py-3 transition-all ${
                      isActive ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <a href="https://github.com/KoteshwarChinnolla" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-full">
                  GitHub
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
