import { useDispatch } from "react-redux";
import { toggleSaveArticle } from "../redux/actions/newsActions";

export default function NewsCard({ article, isSaved }) {
  const dispatch = useDispatch();

  const handleSaveToggle = () => {
    dispatch(toggleSaveArticle(article));
  };

  return (
    <div className=" p-6 rounded-lg ">
      <span className="text-sm text-gray-800">{article.source}</span>
      <h2 className="text-xl font-bold mt-2 mb-2">{article.headline.main}</h2>
      <span className="text-sm text-gray-600">{article.byline.original}</span>
      <p className="text-gray-800 font-medium mt-4 mb-4">{article.snippet}</p>
      <div className="flex justify-between items-center">
        <a
          href={article.web_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          News Page
        </a>
        <button
          onClick={handleSaveToggle}
          className={
            isSaved
              ? "px-4 py-1 bg-black text-white border-solid border-2 border-black rounded hover:text-black hover:bg-white"
              : "px-4 py-1 text-black border-solid border-2 border-black rounded hover:text-white hover:bg-black"
          }
        >
          {isSaved ? "Un-saved" : "Save"}
        </button>
      </div>
    </div>
  );
}
