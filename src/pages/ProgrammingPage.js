import Header from "../components/Header";
import NewsCard from "../components/NewsCard";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "../redux/actions/newsActions";

export default function ProgrammingPage() {
  const dispatch = useDispatch();
  const { articles, savedArticles } = useSelector((state) => state.news);
  useEffect(() => {
    dispatch(fetchNews("Api"));
  }, [dispatch]);
  return (
    <div className="min-h-screen bg-white-100">
      <Header />
      <main className="container py-10 px-10">
        <h1 className="text-3xl font-bold text-center mb-5">
          Programming News
        </h1>
        <hr className="h-0.5 bg-stone-950 "></hr>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <NewsCard
              key={article._id}
              article={article}
              isSaved={savedArticles.some((a) => a.web_url === article.web_url)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
