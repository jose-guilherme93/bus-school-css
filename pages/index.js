export default function Home() {
  return (
    <div className="ml-10">
      <div></div>
      <section className="mt-20 z-10 overflow-hidden relative w-[450px] h-[250px] rounded-lg bg-yellow-700">
        <div className="flex gap-x-9 w-full h-full pt-20">
          <div className="w-20 h-20 bg-zinc-200 ml-6 rounded-xl"></div>
          <div className="w-20 h-20 bg-zinc-200 rounded-xl"></div>

          <section className="w-20 border border-solid flex flex-col gap-2 border-white border-4 rounded-t-lg h-88 bg-white ">
            <div className="w-14 h-10 flex gap-2 justify-center m-auto bg-zinc-400 m-auto  rounded-t-lg">
              <div className="bg-zinc-100 w-1  h-[80px]"></div>
              <div className="bg-zinc-100 w-1  h-[80px]"></div>
              <div className="bg-zinc-100 w-1  h-[80px]"></div>
              <div className="bg-zinc-100 w-1  h-[80px]"></div>
              <div className="bg-zinc-100 w-1  h-[80px]"></div>
            </div>
            <div className="w-14 h-20 bg-zinc-400 m-auto flex justify-center gap-2 rounded-b-lg">
              <div className="bg-zinc-100 w-1  h-[80px]"></div>
              <div className="bg-zinc-100 w-1  h-[80px]"></div>
              <div className="bg-zinc-100 w-1  h-[80px]"></div>
              <div className="bg-zinc-100 w-1  h-[80px]"></div>
              <div className="bg-zinc-100 w-1  h-[80px]"></div>
            </div>
          </section>
          <div className="w-20 h-20 bg-zinc-200 rounded-xl mr-6"></div>
        </div>
      </section>

      <section className="flex -z-9 gap-x-52">
        <div className="ml-4 -z-9 h-[100px] rounded-full  w-[100px] overflow-hidden relative bottom-8 bg-zinc-100 animate-spin">
          <div className="h-[90px] rounded-full relative left-1 top-1  w-[90px] bg-zinc-600 border-4 border-dashed border-zinc-900">
            <div className="h-[30px] m-auto relative top-6 w-[30px] bg-white"></div>
          </div>
        </div>
        <div className="h-[100px] rounded-full  w-[100px] overflow-hidden relative bottom-8 bg-zinc-100 animate-spin">
          <div className="h-[90px] rounded-full relative left-1 top-1  w-[90px] bg-zinc-600 border-4 border-dashed border-zinc-900">
            <div className="h-[30px] m-auto relative top-6 w-[30px] bg-white"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
