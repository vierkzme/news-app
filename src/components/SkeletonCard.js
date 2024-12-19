export default function SkeletonCard() {
  return (
    <div className="p-6 rounded-lg bg-gray-200 animate-pulse mt-5">
      <div className="h-4 w-1/4 bg-gray-300 rounded mb-2"></div>
      <div className="h-6 w-3/4 bg-gray-300 rounded mt-2 mb-2"></div>
      <div className="h-4 w-1/3 bg-gray-300 rounded mb-4"></div>
      <div className="h-4 w-full bg-gray-300 rounded mb-2"></div>
      <div className="h-4 w-5/6 bg-gray-300 rounded mb-4"></div>
      <div className="flex justify-between items-center">
        <div className="h-4 w-1/4 bg-gray-300 rounded"></div>
        <div className="h-8 w-16 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}
