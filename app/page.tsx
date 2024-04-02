export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen p-5 bg-slate-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100">
      <div className="flex flex-col w-full max-w-screen-sm gap-2 p-5 bg-white shadow-lg rounded-3xl md:flex-row">
        <input
          className="w-full h-10 pl-5 transition-shadow bg-gray-200 rounded-full outline-none ring ring-transparent focus:ring-orange-500 focus:ring-offset-2 placeholder:drop-shadow"
          type="text"
          placeholder="Search here!"
        />
        <button className="py-2 font-medium text-white transition-transform rounded-full outline-none active:scale-90 md:px-10 bg-gradient-to-tr from-cyan-500 via-yellow-400 to-purple-400">
          Search
        </button>
      </div>
    </main>
  );
}
