import { useState } from "react";
import { tv } from "tailwind-variants";
import {
  Bell,
  Box,
  FileText,
  Home,
  Layers,
  Menu,
  Moon,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import artist from "./assets/artist.png";
import logo from "./assets/logo.png";
import map from "./assets/map.png";
import tattoo from "./assets/tattoo.png";

const iconButton = tv({
  base: "grid h-11 w-11 place-items-center text-white transition hover:text-zinc-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
  variants: {
    ghost: {
      true: "bg-transparent",
    },
  },
  defaultVariants: {
    ghost: true,
  },
});

const drawerItem = tv({
  base: "flex h-12 items-center gap-4 rounded-lg px-4 text-[16px] font-semibold text-studio-muted transition hover:bg-white/5 hover:text-white",
});

const menuItems = [
  { label: "Portifólio", icon: Home },
  { label: "Artes Autorais", icon: Box },
  { label: "Orçamento", icon: FileText },
  { label: "Cuidados Tattoo", icon: Layers },
  { label: "Reporting", icon: SlidersHorizontal },
];

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <main className="min-h-screen bg-zinc-950 text-studio-ink">
      <section className="mx-auto min-h-screen w-full max-w-[430px] overflow-hidden bg-[radial-gradient(circle_at_20%_27%,rgba(38,103,24,0.5),transparent_17rem),linear-gradient(180deg,#000_0%,#000_16%,#002f08_100%)] shadow-2xl">
        <header className="relative z-30 flex h-[58px] items-center justify-between px-4">
          <button
            className={iconButton()}
            aria-label="Abrir menu"
            onClick={() => setDrawerOpen(true)}
          >
            <Menu size={28} strokeWidth={2.1} />
          </button>

          <button
            className="relative h-7 w-[58px] rounded-full bg-zinc-600 pr-1 shadow-inner"
            aria-label="Alternar tema"
          >
            <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-zinc-950 shadow">
              <Moon size={15} />
            </span>
          </button>

          <button className={iconButton()} aria-label="Pesquisar">
            <Search size={31} strokeWidth={2.4} />
          </button>
        </header>

        <article className="relative px-5 pb-12 pt-1">
          <img
            src={logo}
            alt=""
            className="pointer-events-none absolute left-2 top-[145px] h-[178px] w-[178px] select-none opacity-40 mix-blend-screen"
          />

          <div className="grid grid-cols-[1.02fr_0.98fr] gap-x-4 gap-y-9">
            <section className="relative z-10 col-span-1">
              <h1 className="mb-3 pl-9 text-[19px] font-bold leading-tight">
                Sobre mim:
              </h1>
              <p className="text-[15.5px] font-normal leading-[1.08] text-white">
                Olá, sou a <strong>FloresLD</strong>, uma tatuadora que
                transforma ideias em arte! Com 4 anos de experiência, trabalho
                com uma variedade de estilos, mas minha paixão ronda entre o
                engraving/blackworks ao cartoon.
                <br />
                Atuo em <strong>São Carlos - SP</strong> na{" "}
                <strong>LaMonstera Ateliê</strong>, onde todos são bem vindos e
                muito bem acolhides, um espaço de arte, cultura, respeito e
                carinho. Com foco em <strong>trabalhos únicos e autorais.</strong>
              </p>
            </section>

            <img
              src={artist}
              alt="FloresLD tatuando no estúdio"
              className="relative z-10 mt-10 h-[268px] w-full rounded-lg object-cover"
            />

            <div className="relative z-10">
              <div className="relative h-[290px] overflow-hidden rounded-lg">
                <img
                  src={tattoo}
                  alt="Tatuagem autoral no braço"
                  className="h-full w-full object-cover"
                />
                <button
                  className="absolute left-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-white/60 text-zinc-700"
                  aria-label="Tatuagem anterior"
                >
                  <span className="h-0 w-0 border-y-[7px] border-r-[9px] border-y-transparent border-r-zinc-700" />
                </button>
                <button
                  className="absolute right-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-white/60 text-zinc-700"
                  aria-label="Próxima tatuagem"
                >
                  <span className="h-0 w-0 border-y-[7px] border-l-[9px] border-y-transparent border-l-zinc-700" />
                </button>
              </div>
            </div>

            <section className="relative z-10">
              <h2 className="mb-4 text-[19px] font-bold leading-tight">
                Local de
                <br />
                atendimento:
              </h2>
              <p className="mb-3 text-[16px] leading-tight">LaMonstera Ateliê</p>
              <p className="mb-5 text-[15px] leading-tight">
                Avenida Liberdade, 70 - Jd. Nova Santa Paula, São Carlos - SP
              </p>
              <img
                src={map}
                alt="Mapa do endereço LaMonstera Ateliê"
                className="h-[140px] w-full rounded-sm object-cover"
              />
            </section>
          </div>
        </article>

        <aside
          className={`fixed left-1/2 top-0 z-40 h-screen w-full max-w-[430px] -translate-x-1/2 transition ${
            drawerOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
          aria-hidden={!drawerOpen}
        >
          <button
            className={`absolute inset-0 bg-black/45 transition-opacity ${
              drawerOpen ? "opacity-100" : "opacity-0"
            }`}
            aria-label="Fechar menu"
            onClick={() => setDrawerOpen(false)}
          />
          <nav
            className={`relative flex h-full w-[79%] max-w-[315px] flex-col bg-studio-panel px-5 py-3 shadow-drawer transition-transform duration-300 ${
              drawerOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            aria-label="Menu principal"
          >
            <div className="mb-6 flex h-12 items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={logo} alt="FloresLD" className="h-11 w-11" />
                <span className="text-[24px] font-bold text-white">FloresLD</span>
              </div>
              <button
                className="grid h-10 w-10 place-items-center text-zinc-400"
                aria-label="Fechar menu"
                onClick={() => setDrawerOpen(false)}
              >
                <X size={25} />
              </button>
            </div>

            <label className="mb-8 flex h-[54px] items-center gap-4 rounded-lg bg-zinc-800 px-4 text-zinc-400">
              <Search size={23} className="text-white" />
              <input
                className="min-w-0 flex-1 bg-transparent text-[16px] font-semibold outline-none placeholder:text-zinc-400"
                placeholder="Search"
                type="search"
              />
            </label>

            <div className="space-y-4">
              {menuItems.map(({ label, icon: Icon }) => (
                <a className={drawerItem()} href="#" key={label}>
                  <Icon size={22} className="text-white" />
                  {label}
                </a>
              ))}
            </div>

            <a className={`${drawerItem()} mt-auto mb-6`} href="#">
              <Bell size={22} className="text-white" />
              WhatsApp Business
            </a>
          </nav>
        </aside>
      </section>
    </main>
  );
}

export default App;
