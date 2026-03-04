import { NavLink } from "react-router-dom";
import logo from "@/assets/logo.png";

// ─────────────────────────────────────────────────────────────────────────────
// Nav links
// ─────────────────────────────────────────────────────────────────────────────

const LINKS = [
  { to: "/",              label: "Início"       },
  { to: "/sobre",         label: "Sobre"        },
  { to: "/como-funciona", label: "Como Funciona"},
  { to: "/contactos",     label: "Contactos"    },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// NavBar
// ─────────────────────────────────────────────────────────────────────────────

export function NavBar() {
  return (
    <header className="w-full bg-[#001140] border-b border-white/[0.06] shrink-0">
      <div className="flex items-center justify-between px-10 h-[72px]">

        {/* Logo */}
        <img
          src={logo}
          alt="LocaTech"
          className="h-11 w-auto object-contain select-none"
        />

        {/* Links de navegação */}
        <nav className="flex items-center gap-10">
          {LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                [
                  "relative text-[12px] font-bold tracking-[0.12em] uppercase",
                  "transition-colors duration-150 pb-0.5",
                  isActive
                    ? "text-white after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-[2px] after:bg-amber-400 after:rounded-full"
                    : "text-white/55 hover:text-white/90",
                ].join(" ")
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

      </div>
    </header>
  );
}