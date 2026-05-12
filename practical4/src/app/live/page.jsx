export default function LivePage() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">LIVE</h2>

      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="rounded-md overflow-hidden">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <p>LIVE Stream {index + 1}</p>
            </div>

            <div className="p-2 border border-t-0 rounded-b-md">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gray-300 mr-2"></div>

                <div>
                  <p className="text-sm font-semibold">user_{index + 1}</p>
                  <p className="text-xs text-gray-500">Live stream title here</p>
                </div>
              </div>

              <div className="mt-2 text-xs text-red-500">
                {(index + 1) * 125} viewers
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
