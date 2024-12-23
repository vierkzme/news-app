import { Search, Menu } from "lucide-react";
import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

import { useDispatch } from "react-redux";
import { fetchNews } from "../redux/actions/newsActions";

export default function Header() {
  const [keyword, setKeyword] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const goToSearch = () => {
    dispatch(fetchNews(keyword));
    if (keyword.trim() !== "") {
      navigate(`/search/${keyword.trim().toLowerCase().replace(/\s+/g, "-")}`);
    }
  };

  return (
    <header className="bg-zinc-900 text-white p-4 px-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* lg search */}
        <div className="lg:hidden flex items-center space-x-2">
          <button
            className="text-gray-400 hover:text-white"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search className="h-6 w-6" />
          </button>
          {searchOpen && (
            <div className="absolute top-16 left-4 bg-white text-black p-2 rounded shadow-md">
              <input
                type="search"
                placeholder="Search..."
                className="py-1 px-3 rounded border border-gray-300"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    goToSearch();
                  }
                }}
              />
            </div>
          )}
        </div>

        {/* lg menu */}
        <button
          className="lg:hidden text-gray-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* nav */}
        <nav
          className={`absolute top-16 right-4 bg-zinc-800 p-4 rounded-md shadow-md lg:static lg:bg-transparent lg:shadow-none lg:p-0 lg:flex ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col space-y-2 lg:flex-row lg:space-x-4 lg:space-y-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-sky-500 underline underline-offset-8"
                    : "text-gray-300 hover:text-white"
                }
              >
                Indonesia
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/programming"
                className={({ isActive }) =>
                  isActive
                    ? "text-sky-500 underline underline-offset-8"
                    : "text-gray-300 hover:text-white"
                }
              >
                Programming
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/covid"
                className={({ isActive }) =>
                  isActive
                    ? "text-sky-500 underline underline-offset-8"
                    : "text-gray-300 hover:text-white"
                }
              >
                COVID-19
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/saved"
                className={({ isActive }) =>
                  isActive
                    ? "text-sky-500 underline underline-offset-8"
                    : "text-gray-300 hover:text-white"
                }
              >
                Saved
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* search */}
        <div className="hidden lg:flex items-center space-x-2">
          <div className="relative">
            <input
              type="search"
              placeholder="Search..."
              className="py-1 px-3 rounded text-black"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  goToSearch();
                }
              }}
            />
          </div>
          <button
            onClick={goToSearch}
            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
          >
            Search News
          </button>
        </div>
      </div>
    </header>
  );
}
