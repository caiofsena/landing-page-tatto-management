import { type FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Send } from "lucide-react";
import { AppShell } from "../components/AppShell";
import tattoo1 from "../assets/tattoo-1.png";
import tattoo2 from "../assets/tattoo-2.png";
import { whatsappNumber } from "../constants/contact";

const galleryItems = [
  {
    title: "Blackwork Botânico",
    style: "Blackwork",
    image: tattoo1,
    description: "Folhagens em alto contraste para braços, pernas e composições verticais.",
  },
  {
    title: "Engraving Floral",
    style: "Engraving",
    image: tattoo2,
    description: "Traço inspirado em gravura, com sombra limpa e leitura elegante na pele.",
  },
  {
    title: "Cartoon Autoral",
    style: "Cartoon",
    image: tattoo1,
    description: "Personagem expressivo com acabamento marcante e personalidade própria.",
  },
  {
    title: "Ornamental Delicado",
    style: "Delicado",
    image: tattoo2,
    description: "Projeto leve para encaixes menores e cicatrização consistente.",
  },
  {
    title: "Flash Folclórico",
    style: "Autoral",
    image: tattoo1,
    description: "Arte pronta com identidade da artista e pequenas adaptações possíveis.",
  },
  {
    title: "Composição Sob Medida",
    style: "Autoral",
    image: tattoo2,
    description: "Briefing personalizado para transformar uma ideia aberta em arte final.",
  },
];

const styleFilters = ["Todos", "Blackwork", "Engraving", "Cartoon", "Delicado", "Autoral"];

type Tattoo = (typeof galleryItems)[number];

export function PortfolioPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [filter, setFilter] = useState("Todos");
  const [sort, setSort] = useState("featured");
  const [selectedTattoo, setSelectedTattoo] = useState<Tattoo | null>(galleryItems[0]);
  const isDarkTheme = theme === "dark";
  const visibleTattoos = galleryItems
    .filter((item) => filter === "Todos" || item.style === filter)
    .sort((a, b) => {
      if (sort === "title") return a.title.localeCompare(b.title);
      if (sort === "style") return a.style.localeCompare(b.style);
      return 0;
    });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fileNames = (name: string) =>
      (formData.getAll(name) as File[])
        .filter((file) => file.name)
        .map((file) => file.name)
        .join(", ") || "Não enviado";
    const field = (name: string) => String(formData.get(name) || "Não informado");
    const message = [
      "Olá! Quero solicitar um orçamento de tatuagem.",
      "",
      `Tatuagem escolhida: ${selectedTattoo?.title || "Não selecionada"}`,
      `Descrição: ${selectedTattoo?.description || "Não informada"}`,
      `Tamanho: ${field("size")} cm`,
      `Parte do corpo: ${field("bodyPart")}`,
      `Existe tatuagens próximas: ${field("nearbyTattoos")}`,
      `Preto e branco ou colorido: ${field("colorStyle")}`,
      `Quanto pensa em gastar: ${field("budget")}`,
      `Disponibilidades de horário: ${field("availability")}`,
    ].join("\n");

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
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
      <article className="px-5 pb-16 pt-6 lg:px-12 lg:py-10 xl:px-16">
        <Link
          to="/"
          className="mb-7 inline-flex h-10 items-center gap-2 rounded-lg border border-white/10 px-4 text-sm font-bold text-white transition hover:bg-white/10"
        >
          <ArrowLeft size={17} />
          Voltar
        </Link>

        <section className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="rounded-lg border border-white/10 bg-black/25 p-5">
            <h1 className="text-3xl font-bold text-white">Portifólio</h1>
            <p className="mt-3 text-sm leading-6 text-zinc-300">
              Escolha uma tatuagem da galeria para abrir o briefing e enviar o pedido direto pelo
              WhatsApp.
            </p>

            <div className="mt-7">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-lime-300">
                Categorias
              </p>
              <div className="mt-3 grid gap-2">
                {styleFilters.map((style) => (
                  <button
                    className={`rounded-lg px-3 py-2 text-left text-sm font-semibold transition ${
                      filter === style ? "bg-white text-zinc-950" : "bg-white/5 text-zinc-200 hover:bg-white/10"
                    }`}
                    key={style}
                    onClick={() => setFilter(style)}
                    type="button"
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div>
            <div className="mb-5 flex flex-col gap-3 rounded-lg border border-white/10 bg-white/[0.06] p-4 md:flex-row md:items-center md:justify-between">
              <p className="text-sm font-semibold text-zinc-300">
                {visibleTattoos.length} artes encontradas
              </p>
              <label className="flex items-center gap-3 text-sm font-semibold text-zinc-300">
                Ordenar
                <select
                  className="h-10 rounded-lg border border-white/10 bg-zinc-950 px-3 text-white outline-none"
                  onChange={(event) => setSort(event.target.value)}
                  value={sort}
                >
                  <option value="featured">Destaque</option>
                  <option value="title">A - Z</option>
                  <option value="style">Estilo</option>
                </select>
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {visibleTattoos.map((tattoo) => (
                <button
                  className={`overflow-hidden rounded-lg border text-left transition hover:-translate-y-0.5 hover:bg-white/[0.08] ${
                    selectedTattoo?.title === tattoo.title
                      ? "border-lime-300 bg-white/[0.09]"
                      : "border-white/10 bg-white/[0.05]"
                  }`}
                  key={tattoo.title}
                  onClick={() => setSelectedTattoo(tattoo)}
                  type="button"
                >
                  <img src={tattoo.image} alt={tattoo.title} className="aspect-[4/5] w-full object-cover" />
                  <span className="block p-4">
                    <span className="mb-2 inline-flex rounded-full bg-lime-300 px-2.5 py-1 text-xs font-bold text-zinc-950">
                      {tattoo.style}
                    </span>
                    <span className="block text-lg font-bold text-white">{tattoo.title}</span>
                    <span className="mt-2 block text-sm leading-6 text-zinc-300">{tattoo.description}</span>
                  </span>
                </button>
              ))}
            </div>

            {selectedTattoo && (
              <section className="mt-8 grid gap-6 rounded-lg border border-white/10 bg-black/25 p-5 lg:grid-cols-[320px_minmax(0,1fr)]">
                <div>
                  <img
                    src={selectedTattoo.image}
                    alt={selectedTattoo.title}
                    className="aspect-[4/5] w-full rounded-lg object-cover"
                  />
                  <h2 className="mt-4 text-2xl font-bold text-white">{selectedTattoo.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">{selectedTattoo.description}</p>
                </div>

                <form className="grid gap-4" onSubmit={handleSubmit}>
                  <div className="grid-flow-col">
                    <label className="grid mb-4 gap-2 text-sm font-semibold text-zinc-200">
                      Tamanho (cm)
                      <input className="form-field" min="1" name="size" required type="number" />
                    </label>
                    <label className="grid mb-4 gap-2 text-sm font-semibold text-zinc-200">
                      Onde será feita (parte do corpo)
                      <input className="form-field" name="bodyPart" required type="text" />
                    </label>
                    <label className="grid mb-4 gap-2 text-sm font-semibold text-zinc-200">
                      Existe tatuagens próximas
                      <select className="form-field" name="nearbyTattoos" required>
                        <option value="">Selecione</option>
                        <option>Sim</option>
                        <option>Não</option>
                      </select>
                    </label>
                    <label className="grid mb-4 gap-2 text-sm font-semibold text-zinc-200">
                      Preto e branco ou colorido
                      <select className="form-field" name="colorStyle" required>
                        <option value="">Selecione</option>
                        <option>Preto e branco</option>
                        <option>Colorido</option>
                      </select>
                    </label>
                    <label className="grid mb-4 gap-2 text-sm font-semibold text-zinc-200">
                      Quanto a pessoa pensa em gastar
                      <input className="form-field" name="budget" placeholder="Ex: R$ 350" required type="text" />
                    </label>
                    <label className="grid mb-4 gap-2 text-sm font-semibold text-zinc-200 md:col-span-2">
                      Disponibilidades de horário do usuário
                      <textarea className="form-field min-h-[96px] resize-y" name="availability" placeholder="Ex: terças depois das 18h" required />
                    </label>
                  </div>

                  <button
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-lime-300 px-5 text-sm font-bold text-zinc-950 transition hover:bg-lime-200"
                    type="submit"
                  >
                    <Send size={18} />
                    Enviar para WhatsApp
                  </button>
                </form>
              </section>
            )}
          </div>
        </section>
      </article>
    </AppShell>
  );
}
