import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { PortfolioPage } from "../pages/PortfolioPage";
import { HashScroll } from "./HashScroll";

export function AppRoutes() {
  return (
    <>
      <HashScroll />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </>
  );
}
