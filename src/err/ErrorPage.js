import { useLocation } from "react-router-dom";

export default function ErrorPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const statusCode = queryParams.get("status") || "500";

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500">{statusCode}</h1>
      <p className="text-2xl mt-4 text-gray-700">Something went wrong!</p>
      <a
        href="/"
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Go Back to Home
      </a>
    </div>
  );
}
