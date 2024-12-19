import Header from "../components/Header";
import NewsCard from "../components/NewsCard";
import SkeletonCard from "../components/SkeletonCard";

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SearchPage() {
  const { keyword } = useParams();
  const navigate = useNavigate();

  const { articles, savedArticles, loading, error } = useSelector(
    (state) => state.news
  );

  useEffect(() => {
    if (error) {
      navigate(`/error?status=${error.statusCode || 500}`);
    }
  }, [error, navigate]);

  return (
    <div className="min-h-screen bg-white-100">
      <Header />
      <main className="container py-10 px-10">
        <h1 className="text-3xl font-bold text-center mb-5">
          {keyword ? `${keyword} News` : "Search News"}
        </h1>
        <hr className="h-0.5 bg-stone-950 "></hr>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))
            : articles.map((article) => (
                <NewsCard
                  key={article._id}
                  article={article}
                  isSaved={savedArticles.some(
                    (a) => a.web_url === article.web_url
                  )}
                />
              ))}
        </div>
      </main>
    </div>
  );
}
