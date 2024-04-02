export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen p-5 bg-slate-300">
      <div className="w-full p-5 bg-white shadow-lg rounded-2xl">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="-mb-1 font-semibold text-gray-600">
              In transit
            </span>
            <span className="text-4xl font-semibold">Coolblue</span>
          </div>
          <div className="bg-orange-400 rounded-full size-12" />
        </div>
        <div className="flex items-center gap-2 my-2">
          <span className="bg-green-400 text-white uppercase px-2.5 py-1.5 text-xs font-medium rounded-full hover:bg-green-500">
            Today
          </span>
          <span>9:30~10:30</span>
        </div>
        <div className="relative">
          <div className="absolute w-full h-2 bg-gray-200 rounded-full" />
          <div className="absolute w-2/3 h-2 bg-green-400 rounded-full" />
        </div>
        <div className="flex items-center justify-between mt-5 text-gray-600">
          <span>Expected</span>
          <span>Sorting center</span>
          <span>In transit</span>
          <span className="text-gray-400">Delivered</span>
        </div>
      </div>
    </main>
  );
}
