import randomJokesBG from "/twitter.png";
import { FaArrowLeft } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import Chaicode from "/chaicode.png";
import Elon from "/elon.png";
import Tick from "/tick.png";
import Comment from "/comment.svg";
import Retweet from "/retweet.svg";
import Like from "/like.svg";
import Save from "/save.svg";
import { useEffect, useState } from "react";
import { jokesResponse, defaultJokeResponse } from "../types/type";
import TwitterSkelleton from "./twitterSkelleton";

export default function RandomeJokes() {
  const [data, setData] = useState<jokesResponse>(defaultJokeResponse);
  const [isLoading, setIsLoading] = useState(false);

  const randomNumberGenerator = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const delay = new Promise((resolve) => setTimeout(resolve, 2000));

  const commentsCount = randomNumberGenerator(1, 9);
  const retweetsCount = randomNumberGenerator(1, 9);
  const likesCount = randomNumberGenerator(1, 9);
  const savesCount = randomNumberGenerator(1, 9);

  useEffect(() => {
    const fetchJoke = async () => {
      setIsLoading(true);
      await delay;
      try {
        const response = await fetch(
          "https://api.freeapi.app/api/v1/public/randomjokes/joke/random"
        );
        const result: jokesResponse = await response.json();

        setData(result);
      } catch (error) {
        alert("Error while Fetching ");
        console.error("Error fetching joke:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJoke();
  }, []);

  return (
    <div className="h-screen w-full ">
      <div className="relative">
        <img
          src={randomJokesBG}
          alt="random Jokes background"
          className="object-cover h-screen w-full bg-no-repeat"
        />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[524px] h-[272px] bg-black rounded-xl p-5">
        <div className="flex items-center gap-5 mb-5">
          <FaArrowLeft className="text-white" />
          <p className="text-white font-inter font-bold text-base">Post</p>
        </div>

        {/* ELon Profile */}

        {isLoading ? (
          <TwitterSkelleton />
        ) : (
          <div>
            <div className="flex items-start gap-2  justify-between w-full mb-2">
              <div className="flex items-start gap-2">
                <div className="w-[45px] h-[45px] rounded-full  overflow-hidden flex items-center justify-center">
                  <img src={Elon} alt="Elon profile" />
                </div>

                <div>
                  <div className="flex  items-center gap-0.5">
                    <p className="text-sm font-bold font-inter text-white">
                      Elon Musk
                    </p>
                    <img src={Tick} alt="" />
                  </div>
                  <p className="text-[#A0A0A0] text-xs font-normal">
                    @elonmusk
                  </p>
                </div>
              </div>

              <BsThreeDots className="text-[#A0A0A0] cursor-pointer" />
            </div>

            {/* Jokes */}

            <div className="mb-3">
              <p className="text-white font-inter text-sm mb-5 h-5 truncate">
                {data.data.content}
              </p>

              <p className="text-[#A0A0A0] font-semibold text-[10px]">
                11:18 PM · Jul 30, 2024 · {randomNumberGenerator(1, 2)}k Views
              </p>
            </div>

            <div className=" border-t border-b border-[#71767B] py-2 grid grid-cols-4 items-center justify-center ">
              <div className="flex items-center justify-center gap-1 text-[#A0A0A0]">
                <img src={Comment} alt="comment" />
                <p className="text-[8px] font-inter ">{commentsCount}k</p>
              </div>

              <div className="flex items-center justify-center gap-1 text-[#A0A0A0]">
                <img src={Retweet} alt="retweet" />
                <p className="text-[8px] font-inter ">{retweetsCount}k</p>
              </div>

              <div className="flex items-center justify-center gap-1 text-[#A0A0A0]">
                <img src={Like} alt="like" />
                <p className="text-[8px] font-inter ">{likesCount}k</p>
              </div>

              <div className="flex items-center justify-center gap-1 text-[#A0A0A0]">
                <img src={Save} alt="save" />
                <p className="text-[8px] font-inter ">{savesCount}k</p>
              </div>
            </div>

            <p className="text-white/40 text-center py-4 text-semibold text-[10px]">
              © chai aur code
            </p>
          </div>
        )}
      </div>

      <a
        href={"https://chaicode.com/"}
        target="_blank"
        className="absolute bottom-4 right-5"
        rel="noopener noreferrer"
      >
        <img src={Chaicode} alt="" className="w-[60px] h-[62px]" />
      </a>
    </div>
  );
}
