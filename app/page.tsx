export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen p-5 bg-slate-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100">
      <div className="flex flex-col w-full max-w-screen-sm p-5 bg-white shadow-lg rounded-3xl">
        {["Jo", "Me", "You"].map((person, index) => 
        <div key={index}>
          <div />
          <span>{person}</span>
          <div>
            <span>{index}</span>
          </div>
        </div>
        )}
      </div>
    </main>
  );
}
