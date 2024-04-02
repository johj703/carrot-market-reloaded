export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen p-5 bg-slate-100 ">
      <div className="w-full max-w-screen-sm p-5 bg-white shadow-lg rounded-3xl ">
        <input type="text" placeholder="Search here!" />
        <button>Search</button>
      </div>
    </main>
  );
}
