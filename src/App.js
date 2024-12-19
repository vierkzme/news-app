import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";
import ProgrammingPage from "./pages/ProgrammingPage";
import SavedPage from "./pages/SavedPage";
import SearchPage from "./pages/SearchPage";
import CovidPage from "./pages/CovidPage";
import ErrorPage from "./err/ErrorPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewsPage />} />
        <Route path="/programming" element={<ProgrammingPage />} />
        <Route path="/covid" element={<CovidPage />} />
        <Route path="/saved" element={<SavedPage />} />
        <Route path="/search/:keyword" element={<SearchPage />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
