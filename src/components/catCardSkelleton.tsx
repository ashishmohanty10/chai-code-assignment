export function CatCardSkelleton() {
  return (
    <div className="w-[375px] h-[643px] rounded-3xl bg-white text-black">
      <div className="h-[325px] w-[375px] bg-gray-300 rounded-t-3xl">
        <img src="" alt="" className="object-cover overflow-hidden" />
      </div>

      <div className="p-5 space-y-2 ">
        <h2 className="h-7 w-40 bg-gray-300"></h2>

        <p className="bg-gray-300 text-sm h-24 tracking-tight"></p>

        <p className="w-full flex justify-between items-center text-black">
          <span className="bg-gray-300 h-6"></span>

          <span className="bg-gray-300 h-6"></span>
        </p>

        <div className="space-y-2">
          <p className="text-sm bg-gray-300 w-fit h-7 py-1 italic font-medium"></p>

          <div className="flex items-center gap-1">
            <p className="bg-gray-300 text-xs rounded-lg w-[81px] h-[18px] flex items-center justify-center p-0.5 "></p>

            <p className="bg-gray-300 text-xs rounded-lg w-[81px] h-[18px] flex items-center justify-center p-0.5  "></p>
            <p className="bg-gray-300 text-xs rounded-lg w-[81px] h-[18px] flex items-center justify-center p-0.5 "></p>
          </div>

          <div className="flex items-center gap-10">
            <p className="text-sm font-medium italic h-4 bg-slate-300"></p>

            <p className="text-sm font-normal h-4 bg-slate-300"></p>
          </div>

          <a href="" className="text-[#7D99E2] text-sm"></a>
        </div>
      </div>
    </div>
  );
}
