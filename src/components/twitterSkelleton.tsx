import { BsThreeDots } from "react-icons/bs";
import Tick from "/tick.png";
import Comment from "/comment.svg";
import Retweet from "/retweet.svg";
import Like from "/like.svg";
import Save from "/save.svg";

export default function TwitterSkelleton() {
  return (
    <>
      <div className="flex items-start gap-2  justify-between w-full mb-1">
        <div className="flex items-start gap-2">
          <div className="w-[45px] h-[45px] rounded-full bg-gray-400 animate-pulse  overflow-hidden flex items-center justify-center">
            <img src="" />
          </div>

          <div className="animate-pulse">
            <div className="flex  items-center gap-0.5">
              <p className="text-sm font-bold font-inter text-white">
                Elon Musk
              </p>
              <img src={Tick} alt="" />
            </div>
            <p className="text-[#A0A0A0] text-xs font-normal">@elonmusk</p>
          </div>
        </div>

        <BsThreeDots className="text-[#A0A0A0] animate-pulse" />
      </div>

      {/* Jokes */}

      <div className="mb-3">
        <p className="text-white font-inter text-sm mb-5 h-3 w-full animate-pulse"></p>

        <p className="text-[#A0A0A0] font-semibold text-[10px] h-1 animate-pulse"></p>
      </div>

      <div className=" border-t border-b border-[#71767B] py-2 grid grid-cols-4 items-center justify-center animate-pulse">
        <div className="flex items-center justify-center gap-1 text-[#A0A0A0]">
          <img src={Comment} alt="comment" />
          <p className="text-[8px] font-inter ">--</p>
        </div>

        <div className="flex items-center justify-center gap-1 text-[#A0A0A0]">
          <img src={Retweet} alt="retweet" />
          <p className="text-[8px] font-inter ">--</p>
        </div>

        <div className="flex items-center justify-center gap-1 text-[#A0A0A0]">
          <img src={Like} alt="like" />
          <p className="text-[8px] font-inter ">--</p>
        </div>

        <div className="flex items-center justify-center gap-1 text-[#A0A0A0]">
          <img src={Save} alt="save" />
          <p className="text-[8px] font-inter ">--</p>
        </div>
      </div>

      <p className="text-white/40 text-center py-4 text-semibold text-[10px]">
        © chai aur code
      </p>
    </>
  );
}
