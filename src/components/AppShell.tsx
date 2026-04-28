import { type Dispatch, type ReactNode, type SetStateAction } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Box,
  FileText,
  Layers,
  Menu,
  Moon,
  PanelLeftClose,
  PanelLeftOpen,
  Send,
  SlidersHorizontal,
  Sparkles,
  Sun,
  X,
} from "lucide-react";
import logo from "../assets/logo.png";
import { whatsappNumber } from "../constants/contact";
import { drawerItem } from "../constants/ui";

const menuItems = [
  { label: "Portifólio", to: "/portfolio", icon: Sparkles },
  { label: "Artes Autorais", to: "/#artes-autorais", icon: Box },
  { label: "Orçamento", to: "/#orcamento", icon: FileText },
  { label: "Cuidados Tattoo", to: "/#cuidados", icon: Layers },
  { label: "Reporting", to: "/#reporting", icon: SlidersHorizontal },
];

type AppShellProps = {
  children: ReactNode;
  drawerOpen: boolean;
  isDarkTheme: boolean;
  sidebarExpanded: boolean;
  setDrawerOpen: (open: boolean) => void;
  setSidebarExpanded: Dispatch<SetStateAction<boolean>>;
  setTheme: Dispatch<SetStateAction<"dark" | "light">>;
};

function Sidebar({
  drawerOpen,
  expanded,
  onClose,
  onToggleExpanded,
}: {
  drawerOpen: boolean;
  expanded: boolean;
  onClose: () => void;
  onToggleExpanded: () => void;
}) {
  return (
    <aside
      className={`fixed left-1/2 top-0 z-40 h-screen w-full max-w-[430px] -translate-x-1/2 transition-[width,transform] duration-300 lg:relative lg:left-auto lg:top-auto lg:z-auto lg:block lg:h-auto lg:max-w-none lg:translate-x-0 ${
        drawerOpen ? "pointer-events-auto" : "pointer-events-none lg:pointer-events-auto"
      } ${expanded ? "lg:w-[315px]" : "lg:w-[84px]"}`}
    >
      <button
        className={`absolute inset-0 bg-black/45 transition-opacity lg:hidden ${
          drawerOpen ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Fechar menu"
        onClick={onClose}
      />
      <nav
        className={`relative flex h-full w-[79%] max-w-[315px] flex-col bg-studio-panel px-5 py-3 shadow-drawer transition-[width,transform,padding] duration-300 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 lg:shadow-none ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        } ${expanded ? "lg:w-[315px]" : "lg:w-[84px]"}`}
        aria-label="Menu principal"
      >
        <div className="mb-6 flex h-12 items-center justify-between">
          <Link
            className={`flex min-w-0 items-center gap-3 ${expanded ? "" : "lg:justify-center"}`}
            to="/"
            onClick={onClose}
            aria-label="FloresLD"
          >
            <img src={logo} alt="FloresLD" className="h-13 w-11" />
            <span
              className={`text-[24px] font-bold text-white transition lg:whitespace-nowrap ${
                expanded ? "lg:opacity-100" : "lg:hidden lg:opacity-0"
              }`}
            >
              FloresLD
            </span>
          </Link>
          <button
            className="grid h-10 w-10 place-items-center text-zinc-400 lg:hidden"
            aria-label="Fechar menu"
            onClick={onClose}
          >
            <X size={25} />
          </button>
          <button
            className="hidden h-10 w-10 shrink-0 place-items-center rounded-lg text-zinc-400 transition hover:bg-white/5 hover:text-white lg:grid"
            aria-label={expanded ? "Recolher menu" : "Expandir menu"}
            onClick={onToggleExpanded}
          >
            {expanded ? <PanelLeftClose size={23} /> : <PanelLeftOpen size={23} />}
          </button>
        </div>

        <div className="space-y-4">
          {menuItems.map(({ label, to, icon: Icon }) => (
            <NavLink
              className={({ isActive }) =>
                `${drawerItem()} ${expanded ? "" : "lg:justify-center lg:px-0"} ${
                  isActive && to === "/portfolio" ? "bg-white/10 text-white" : ""
                }`
              }
              to={to}
              key={label}
              onClick={onClose}
              title={label}
              aria-label={label}
            >
              <Icon size={22} className="text-white" />
              <span className={expanded ? "" : "lg:hidden"}>{label}</span>
            </NavLink>
          ))}
        </div>

        <a
          className={`${drawerItem()} mt-auto mb-6 ${expanded ? "" : "lg:justify-center lg:px-0"}`}
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
          title="WhatsApp Business"
          aria-label="WhatsApp Business"
        >
          <Send size={22} className="text-white" />
          <span className={expanded ? "" : "lg:hidden"}>WhatsApp Business</span>
        </a>
      </nav>
    </aside>
  );
}

export function AppShell({
  children,
  drawerOpen,
  isDarkTheme,
  sidebarExpanded,
  setDrawerOpen,
  setSidebarExpanded,
  setTheme,
}: AppShellProps) {
  return (
    <main
      className={`h-screen overflow-hidden transition-colors duration-300 ${
        isDarkTheme ? "theme-dark bg-zinc-950 text-studio-ink" : "theme-light bg-zinc-100 text-zinc-950"
      }`}
    >
      <section
        className={`h-screen w-full overflow-hidden shadow-2xl transition-[background,grid-template-columns] duration-300 lg:grid ${
          isDarkTheme
            ? "bg-[radial-gradient(circle_at_16%_18%,rgba(38,103,24,0.55),transparent_22rem),radial-gradient(circle_at_84%_55%,rgba(28,95,24,0.25),transparent_26rem),linear-gradient(180deg,#000_0%,#000_18%,#002f08_100%)]"
            : "bg-[radial-gradient(circle_at_16%_18%,rgba(163,230,53,0.32),transparent_24rem),radial-gradient(circle_at_84%_55%,rgba(34,197,94,0.16),transparent_26rem),linear-gradient(180deg,#fff_0%,#f5f7f1_48%,#dfead9_100%)]"
        }`}
        style={{
          gridTemplateColumns: sidebarExpanded ? "315px minmax(0, 1fr)" : "84px minmax(0, 1fr)",
        }}
      >
        <Sidebar
          drawerOpen={drawerOpen}
          expanded={sidebarExpanded}
          onClose={() => setDrawerOpen(false)}
          onToggleExpanded={() => setSidebarExpanded((current) => !current)}
        />

        <div className="h-screen min-w-0 overflow-y-auto">
          <header
            className={`sticky top-0 z-30 flex h-[58px] items-center justify-between px-4 backdrop-blur transition-colors duration-300 ${
              isDarkTheme ? "bg-black/70" : "bg-white/40"
            }`}
          >
            <button
              className={`relative h-7 w-[58px] rounded-full p-0.5 shadow-inner transition-colors duration-300 ${
                isDarkTheme ? "bg-zinc-600" : "bg-lime-200"
              }`}
              aria-label={`Alternar para tema ${isDarkTheme ? "claro" : "escuro"}`}
              aria-pressed={!isDarkTheme}
              onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
            >
              <span
                className={`grid h-6 w-6 place-items-center rounded-full bg-white text-zinc-950 shadow transition-transform duration-300 ${
                  isDarkTheme ? "translate-x-0" : "translate-x-[30px]"
                }`}
              >
                {isDarkTheme ? <Moon size={15} /> : <Sun size={15} />}
              </span>
            </button>

            <button
              className="grid h-10 w-10 place-items-center rounded-lg text-white transition hover:bg-white/10 lg:hidden"
              aria-label="Abrir menu"
              onClick={() => setDrawerOpen(true)}
            >
              <Menu size={24} />
            </button>
          </header>

          {children}
        </div>
      </section>
    </main>
  );
}
