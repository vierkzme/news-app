import { useSelector } from "react-redux";

export default function NewsTable() {
  const { savedArticles } = useSelector((state) => state.news);
  return (
    <div className="container mx-auto p-5 px-8">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2 text-left">Source</th>
            <th className="border p-2 text-left">Title</th>
            <th className="border p-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          {savedArticles.map((article, index) => (
            <tr
              key={article._id}
              article={article}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
            >
              <td className="p-2">
                {article.source} - {article.byline.original}
                <br></br>
                <a
                  href={article.web_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  News Page
                </a>
              </td>
              <td className="p-2">{article.headline.main}</td>
              <td className="p-2">{article.snippet}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
