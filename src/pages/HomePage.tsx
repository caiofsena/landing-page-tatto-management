import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { AppShell } from "../components/AppShell";
import artist from "../assets/artist.png";
import logo from "../assets/logo.png";
import map from "../assets/map.png";
import tattoo1 from "../assets/tattoo-1.png";
import tattoo2 from "../assets/tattoo-2.png";
import { featureCard, sectionTitle } from "../constants/ui";

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

export function HomePage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [selectedTattooIndex, setSelectedTattooIndex] = useState(0);
  const isDarkTheme = theme === "dark";
  const selectedTattoo = tattooImages[selectedTattooIndex];

  function showPreviousTattoo() {
    setSelectedTattooIndex((current) => (current === 0 ? tattooImages.length - 1 : current - 1));
  }

  function showNextTattoo() {
    setSelectedTattooIndex((current) => (current === tattooImages.length - 1 ? 0 : current + 1));
  }

  return (
    <AppShell
      drawerOpen={drawerOpen}
      isDarkTheme={isDarkTheme}
      sidebarExpanded={sidebarExpanded}
      setDrawerOpen={setDrawerOpen}
      setSidebarExpanded={setSidebarExpanded}
      setTheme={setTheme}
    >
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
              Olá, sou a <strong>FloresLD</strong>, uma tatuadora que transforma ideias em arte.
              Com 4 anos de experiência, trabalho com estilos como engraving, blackwork e cartoon,
              sempre com foco em <strong>trabalhos únicos e autorais.</strong>
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/portfolio"
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-white px-5 text-sm font-bold text-zinc-950 transition hover:bg-lime-100"
              >
                <Sparkles size={18} />
                Ver portifólio
              </Link>
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
              Uma seleção de trabalhos que mostra variedade de traço, contraste e acabamento.
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
            </div>

            <div className="grid gap-4">
              {portfolioItems.map((item) => (
                <div className={featureCard()} key={item}>
                  <CheckCircle2 className="mb-4 text-lime-300" size={25} />
                  <h3 className="text-xl font-bold text-white">{item}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">
                    Composição pensada para encaixe no corpo, leitura do desenho e cicatrização.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="artes-autorais" className="relative z-10 scroll-mt-8 pt-14 lg:pt-20">
          <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_430px] lg:items-start">
            <div>
              <h2 className={sectionTitle()}>Artes Autorais</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-200">
                Projetos criados a partir do repertório visual da artista, com espaço para adaptar
                tema, tamanho e local do corpo.
              </p>
            </div>
            <div className={featureCard()}>
              <Sparkles className="mb-4 text-lime-300" size={28} />
              <h3 className="text-2xl font-bold text-white">Desenho com assinatura visual</h3>
              <p className="mt-3 leading-7 text-zinc-300">
                A proposta nasce de referências, briefing e disponibilidade de agenda.
              </p>
            </div>
          </div>
        </section>

        <section id="orcamento" className="relative z-10 scroll-mt-8 pt-14 lg:pt-20">
          <div className="grid gap-7 lg:grid-cols-[390px_minmax(0,1fr)]">
            <div>
              <h2 className={sectionTitle()}>Orçamento</h2>
              <p className="mt-4 text-base leading-7 text-zinc-200">
                Para pedir valores, envie ideia, referências, tamanho aproximado, região do corpo e
                disponibilidade.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {["Briefing", "Tamanho", "Agenda"].map((item, index) => (
                <div className={featureCard()} key={item}>
                  <ClipboardList className="mb-4 text-lime-300" size={27} />
                  <span className="text-sm font-bold text-zinc-400">0{index + 1}</span>
                  <h3 className="mt-2 text-xl font-bold text-white">{item}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">
                    Etapa essencial para alinhar expectativa, complexidade e tempo de sessão.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cuidados" className="relative z-10 scroll-mt-8 pt-14 lg:pt-20">
          <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div>
              <h2 className={sectionTitle()}>Cuidados Tattoo</h2>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {careSteps.map((step) => (
                  <div
                    className="flex items-start gap-3 rounded-lg border border-white/10 bg-black/25 p-4"
                    key={step}
                  >
                    <ShieldCheck className="mt-0.5 shrink-0 text-lime-300" size={22} />
                    <p className="text-sm leading-6 text-zinc-200">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={featureCard()}>
              <h3 className="text-2xl font-bold text-white">Local de atendimento</h3>
              <p className="mt-4 text-base leading-7 text-zinc-200">
                LaMonstera Ateliê, Avenida Liberdade, 70 - Jd. Nova Santa Paula, São Carlos - SP
              </p>
              <img
                src={map}
                alt="Mapa do endereço LaMonstera Ateliê"
                className="mt-5 h-[160px] w-full rounded-sm object-cover"
              />
            </div>
          </div>
        </section>

        <section id="reporting" className="relative z-10 scroll-mt-8 pt-14 lg:pt-20">
          <div className="grid gap-7 lg:grid-cols-[360px_minmax(0,1fr)]">
            <div>
              <h2 className={sectionTitle()}>Reporting</h2>
              <p className="mt-4 text-base leading-7 text-zinc-200">
                Indicadores simples para acompanhar agenda, procura por estilos e volume de
                projetos autorais.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {reportItems.map((item) => (
                <div className={featureCard()} key={item.label}>
                  <p className="text-4xl font-bold text-white">{item.value}</p>
                  <p className="mt-3 text-sm font-semibold text-zinc-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>
    </AppShell>
  );
}
