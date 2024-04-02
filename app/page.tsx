export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen p-5 bg-slate-100 ">
      <div className="flex flex-col w-full max-w-screen-sm gap-2 p-5 bg-white shadow-lg rounded-3xl">
        <input className="w-full h-10 pl-5 bg-gray-200 rounded-full outline-none ring" type="text" placeholder="Search here!" />
        <button className="py-2 font-medium text-white transition-transform bg-black rounded-full outline-none active:scale-90 focus:scale-90">Search</button>
      </div>
    </main>
  );
}
