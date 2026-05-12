export default function ExplorePage() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Explore</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Trending Hashtags</h3>
        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="aspect-video bg-gray-200 rounded-md flex flex-col items-center justify-center p-4"
            >
              <p className="font-bold text-lg">#Trending{index + 1}</p>
              <p className="text-sm text-gray-500">{(index + 1) * 1.5}M views</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-3">Popular Videos</h3>
        <div className="grid grid-cols-4 gap-3">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="aspect-[9/16] bg-gray-300 rounded-md flex items-center justify-center"
            >
              <p className="text-sm">Video {index + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
