import { useState } from "react";
import { tv } from "tailwind-variants";
import {
  Bell,
  Box,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  FileText,
  Home,
  Layers,
  Moon,
  PanelLeftClose,
  PanelLeftOpen,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Sun,
  X,
} from "lucide-react";
import artist from "./assets/artist.png";
import logo from "./assets/logo.png";
import map from "./assets/map.png";
import tattoo1 from "./assets/tattoo-1.png";
import tattoo2 from "./assets/tattoo-2.png";

const drawerItem = tv({
  base: "flex h-12 items-center gap-4 rounded-lg px-4 text-[16px] font-semibold text-studio-muted transition hover:bg-white/5 hover:text-white",
});

const sectionTitle = tv({
  base: "text-3xl font-bold leading-tight text-white md:text-4xl",
});

const featureCard = tv({
  base: "rounded-lg border border-white/10 bg-white/[0.06] p-5 shadow-xl shadow-black/20 backdrop-blur",
});

const menuItems = [
  { label: "Portifólio", href: "#portfolio", icon: Home },
  { label: "Artes Autorais", href: "#artes-autorais", icon: Box },
  { label: "Orçamento", href: "#orcamento", icon: FileText },
  { label: "Cuidados Tattoo", href: "#cuidados", icon: Layers },
  { label: "Reporting", href: "#reporting", icon: SlidersHorizontal },
];

const portfolioItems = [
  "Blackwork com contraste alto",
  "Engraving inspirado em gravura",
  "Cartoon com personalidade",
  "Projetos delicados sob medida",
];

const careSteps = [
  "Higienizar com sabonete neutro",
  "Evitar sol, piscina e atrito nos primeiros dias",
  "Hidratar conforme orientação do atendimento",
  "Enviar foto da cicatrização para acompanhamento",
];

const reportItems = [
  { label: "Sessões realizadas", value: "120+" },
  { label: "Projetos autorais", value: "68" },
  { label: "Tempo médio de resposta", value: "1 dia" },
];

const tattooImages = [
  { src: tattoo1, alt: "Tatuagem autoral no braço" },
  { src: tattoo2, alt: "Tatuagem autoral em estilo blackwork" },
];

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
          <a
            className={`flex min-w-0 items-center gap-3 ${
              expanded ? "" : "lg:justify-center"
            }`}
            href="#inicio"
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
          </a>
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
          {menuItems.map(({ label, href, icon: Icon }) => (
            <a
              className={`${drawerItem()} ${expanded ? "" : "lg:justify-center lg:px-0"}`}
              href={href}
              key={label}
              onClick={onClose}
              title={label}
              aria-label={label}
            >
              <Icon size={22} className="text-white" />
              <span className={expanded ? "" : "lg:hidden"}>{label}</span>
            </a>
          ))}
        </div>

        <a
          className={`${drawerItem()} mt-auto mb-6 ${expanded ? "" : "lg:justify-center lg:px-0"}`}
          href="https://wa.me/5516999999999"
          target="_blank"
          rel="noreferrer"
          title="WhatsApp Business"
          aria-label="WhatsApp Business"
        >
          <Bell size={22} className="text-white" />
          <span className={expanded ? "" : "lg:hidden"}>WhatsApp Business</span>
        </a>
      </nav>
    </aside>
  );
}

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [selectedTattooIndex, setSelectedTattooIndex] = useState(0);
  const isDarkTheme = theme === "dark";
  const selectedTattoo = tattooImages[selectedTattooIndex];

  function showPreviousTattoo() {
    setSelectedTattooIndex((current) =>
      current === 0 ? tattooImages.length - 1 : current - 1,
    );
  }

  function showNextTattoo() {
    setSelectedTattooIndex((current) =>
      current === tattooImages.length - 1 ? 0 : current + 1,
    );
  }

  return (
    <main
      className={`h-screen overflow-hidden transition-colors duration-300 ${
        isDarkTheme
          ? "theme-dark bg-zinc-950 text-studio-ink"
          : "theme-light bg-zinc-100 text-zinc-950"
      }`}
    >
      <section
        className={`h-screen w-full overflow-hidden shadow-2xl transition-[background,grid-template-columns] duration-300 lg:grid 
          ${
            isDarkTheme
              ? "bg-[radial-gradient(circle_at_16%_18%,rgba(38,103,24,0.55),transparent_22rem),radial-gradient(circle_at_84%_55%,rgba(28,95,24,0.25),transparent_26rem),linear-gradient(180deg,#000_0%,#000_18%,#002f08_100%)]"
              : "bg-[radial-gradient(circle_at_16%_18%,rgba(163,230,53,0.32),transparent_24rem),radial-gradient(circle_at_84%_55%,rgba(34,197,94,0.16),transparent_26rem),linear-gradient(180deg,#fff_0%,#f5f7f1_48%,#dfead9_100%)]"
          }
        `}
        style={{
          gridTemplateColumns: sidebarExpanded
            ? "315px minmax(0, 1fr)"
            : "84px minmax(0, 1fr)",
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
              onClick={() =>
                setTheme((current) => (current === "dark" ? "light" : "dark"))
              }
            >
              <span
                className={`grid h-6 w-6 place-items-center rounded-full bg-white text-zinc-950 shadow transition-transform duration-300 ${
                  isDarkTheme ? "translate-x-0" : "translate-x-[30px]"
                }`}
              >
                {isDarkTheme ? <Moon size={15} /> : <Sun size={15} />}
              </span>
            </button>
          </header>

          <article className="relative px-5 pb-16 pt-1 lg:px-12 lg:py-10 xl:px-16">
            <img
              src={logo}
              alt=""
              className="pointer-events-none absolute left-2 top-[145px] h-[178px] w-[178px] select-none mix-blend-screen lg:left-6 lg:top-1 lg:h-[240px] lg:w-[260px]"
            />

            <section
              id="inicio"
              className="relative z-10 grid gap-8 lg:min-h-[680px] lg:grid-cols-[minmax(0,1fr)_390px] lg:items-center"
            >
              <div className="max-w-2xl">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-lime-300">
                  São Carlos - SP
                </p>
                <h1 className="mb-5 text-[19px] font-bold leading-tight text-white lg:text-6xl">
                  FloresLD
                </h1>
                <p className="max-w-xl text-[15.5px] leading-[1.08] text-white lg:text-xl lg:leading-8">
                  Olá, sou a <strong>FloresLD</strong>, uma tatuadora que
                  transforma ideias em arte. Com 4 anos de experiência, trabalho
                  com estilos como engraving, blackwork e cartoon, sempre com
                  foco em <strong>trabalhos únicos e autorais.</strong>
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#orcamento"
                    className="inline-flex h-11 items-center gap-2 rounded-lg bg-white px-5 text-sm font-bold text-zinc-950 transition hover:bg-lime-100"
                  >
                    <CalendarDays size={18} />
                    Orçamento
                  </a>
                  <a
                    href="#portfolio"
                    className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/20 px-5 text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    <Sparkles size={18} />
                    Ver portifólio
                  </a>
                </div>
              </div>

              <img
                src={artist}
                alt="FloresLD tatuando no estúdio"
                className="h-[268px] w-full rounded-lg object-cover lg:h-[520px]"
              />
            </section>

            <section
              id="portfolio"
              className="relative z-10 scroll-mt-8 pt-14 lg:grid lg:grid-cols-[160px_minmax(0,1fr)] lg:gap-5 lg:pt-10"
            >
              <div>
                <h2 className={sectionTitle()}>Portifólio</h2>
                <p className="mt-4 max-w-sm text-base leading-7 text-zinc-200">
                  Uma seleção de trabalhos que mostra variedade de traço,
                  contraste e acabamento para diferentes ideias de tatuagem.
                </p>
              </div>

              <div className="mt-7 grid gap-5 md:grid-cols-2 lg:mt-0">
                <div className="relative min-h-[360px] overflow-hidden rounded-lg md:min-h-[460px]">
                  <img
                    src={selectedTattoo.src}
                    alt={selectedTattoo.alt}
                    className="h-full w-full object-cover transition-opacity duration-300"
                  />
                  <button
                    className="absolute left-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/65 text-zinc-700"
                    aria-label="Tatuagem anterior"
                    onClick={showPreviousTattoo}
                    type="button"
                  >
                    <span className="h-0 w-0 border-y-[7px] border-r-[9px] border-y-transparent border-r-zinc-700" />
                  </button>
                  <button
                    className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/65 text-zinc-700"
                    aria-label="Próxima tatuagem"
                    onClick={showNextTattoo}
                    type="button"
                  >
                    <span className="h-0 w-0 border-y-[7px] border-l-[9px] border-y-transparent border-l-zinc-700" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                    {tattooImages.map((image, index) => (
                      <button
                        className={`h-2.5 rounded-full transition-all ${
                          selectedTattooIndex === index
                            ? "w-6 bg-white"
                            : "w-2.5 bg-white/55"
                        }`}
                        key={image.src}
                        aria-label={`Mostrar tatuagem ${index + 1}`}
                        aria-pressed={selectedTattooIndex === index}
                        onClick={() => setSelectedTattooIndex(index)}
                        type="button"
                      />
                    ))}
                  </div>
                </div>

                <div className="grid gap-4">
                  {portfolioItems.map((item) => (
                    <div className={featureCard()} key={item}>
                      <CheckCircle2 className="mb-4 text-lime-300" size={25} />
                      <h3 className="text-xl font-bold text-white">{item}</h3>
                      <p className="mt-3 text-sm leading-6 text-zinc-300">
                        Composição pensada para encaixe no corpo, leitura do
                        desenho e cicatrização consistente.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section
              id="artes-autorais"
              className="relative z-10 scroll-mt-8 pt-14 lg:pt-20"
            >
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_430px] lg:items-start">
                <div>
                  <h2 className={sectionTitle()}>Artes Autorais</h2>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-200">
                    Projetos criados a partir do repertório visual da artista,
                    com espaço para adaptar tema, tamanho e local do corpo sem
                    perder identidade.
                  </p>
                </div>
                <div className={featureCard()}>
                  <Sparkles className="mb-4 text-lime-300" size={28} />
                  <h3 className="text-2xl font-bold text-white">
                    Desenho com assinatura visual
                  </h3>
                  <p className="mt-3 leading-7 text-zinc-300">
                    A proposta nasce de referências, briefing e disponibilidade
                    de agenda, resultando em uma arte exclusiva para cada pele.
                  </p>
                </div>
              </div>
            </section>

            <section
              id="orcamento"
              className="relative z-10 scroll-mt-8 pt-14 lg:pt-20"
            >
              <div className="grid gap-7 lg:grid-cols-[390px_minmax(0,1fr)]">
                <div>
                  <h2 className={sectionTitle()}>Orçamento</h2>
                  <p className="mt-4 text-base leading-7 text-zinc-200">
                    Para pedir valores, envie ideia, referências, tamanho
                    aproximado, região do corpo e disponibilidade de datas.
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  {["Briefing", "Tamanho", "Agenda"].map((item, index) => (
                    <div className={featureCard()} key={item}>
                      <ClipboardList className="mb-4 text-lime-300" size={27} />
                      <span className="text-sm font-bold text-zinc-400">
                        0{index + 1}
                      </span>
                      <h3 className="mt-2 text-xl font-bold text-white">
                        {item}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-zinc-300">
                        Etapa essencial para alinhar expectativa, complexidade e
                        tempo de sessão.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section
              id="cuidados"
              className="relative z-10 scroll-mt-8 pt-14 lg:pt-20"
            >
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_360px]">
                <div>
                  <h2 className={sectionTitle()}>Cuidados Tattoo</h2>
                  <div className="mt-6 grid gap-3 md:grid-cols-2">
                    {careSteps.map((step) => (
                      <div
                        className="flex items-start gap-3 rounded-lg border border-white/10 bg-black/25 p-4"
                        key={step}
                      >
                        <ShieldCheck
                          className="mt-0.5 shrink-0 text-lime-300"
                          size={22}
                        />
                        <p className="text-sm leading-6 text-zinc-200">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={featureCard()}>
                  <h3 className="text-2xl font-bold text-white">
                    Local de atendimento
                  </h3>
                  <p className="mt-4 text-base leading-7 text-zinc-200">
                    LaMonstera Ateliê, Avenida Liberdade, 70 - Jd. Nova Santa
                    Paula, São Carlos - SP
                  </p>
                  <img
                    src={map}
                    alt="Mapa do endereço LaMonstera Ateliê"
                    className="mt-5 h-[160px] w-full rounded-sm object-cover"
                  />
                </div>
              </div>
            </section>

            <section
              id="reporting"
              className="relative z-10 scroll-mt-8 pt-14 lg:pt-20"
            >
              <div className="grid gap-7 lg:grid-cols-[360px_minmax(0,1fr)]">
                <div>
                  <h2 className={sectionTitle()}>Reporting</h2>
                  <p className="mt-4 text-base leading-7 text-zinc-200">
                    Indicadores simples para acompanhar agenda, procura por
                    estilos e volume de projetos autorais.
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  {reportItems.map((item) => (
                    <div className={featureCard()} key={item.label}>
                      <p className="text-4xl font-bold text-white">
                        {item.value}
                      </p>
                      <p className="mt-3 text-sm font-semibold text-zinc-300">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}

export default App;
