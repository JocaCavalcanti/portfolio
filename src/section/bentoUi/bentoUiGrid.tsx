


export default function BentoUiGrid() {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 grid-flow-row-dense lg:grid-cols-4 gap-4">
      <div className="h-[220px] lg:h-[340px] col-span-2 sm:col-span-1 lg:col-span-2 bg-blue-500 rounded-3xl">profile pic</div>

      <div className="h-[220px] lg:h-[340px] col-span-2 sm:col-span-1 md:col-span-2 lg:col-span-2 bg-gray-300 rounded-3xl">welcome</div>

      <div className="h-[304px] lg:h-full row-span-2 md:h-full  bg-indigo-500 rounded-3xl">img</div>

      <div className="h-[144px] lg:h-[220px] lg:col-span-2 bg-red-400 rounded-3xl">exp</div>

      <div className="h-[144px] lg:h-[220px] bg-pink-500 rounded-3xl">front</div>

      <div className="h-[144px] lg:h-[220px] bg-green-500 rounded-3xl">linkedin</div>

      <div className="h-[144px] lg:h-[220px] bg-blue-600 rounded-3xl">github</div>

      <div className="h-[144px] lg:h-[220px] col-span-2 lg:col-span-1 bg-black rounded-3xl">spotfy</div>

      <div className="h-[144px] lg:h-[220px] col-span-2 lg:col-span-2 md:col-span-2 md:order-7 bg-yellow-400 rounded-3xl">stacks</div>

      <div className="h-[144px] lg:h-[220px] md:h-[220px] bg-slate-500 rounded-3xl">colors</div>

      <div className="h-[144px] lg:h-[220px] bg-rose-500 rounded-3xl">img</div>

      <div className="h-[144px] lg:h-[220px] col-span-2 sm:col-span-2 lg:col-span-4 md:col-span-3 md:order-last bg-gray-700 rounded-3xl"> phrase</div>
    </section>
  )
}
