import { tv } from "tailwind-variants";

export const drawerItem = tv({
  base: "flex h-12 items-center gap-4 rounded-lg px-4 text-[16px] font-semibold text-studio-muted transition hover:bg-white/5 hover:text-white",
});

export const sectionTitle = tv({
  base: "text-3xl font-bold leading-tight text-white md:text-4xl",
});

export const featureCard = tv({
  base: "rounded-lg border border-white/10 bg-white/[0.06] p-5 shadow-xl shadow-black/20 backdrop-blur",
});
