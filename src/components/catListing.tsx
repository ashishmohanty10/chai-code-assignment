import { useEffect, useState, useRef } from "react";
import catBG from "/cat.png";
import Chaicode from "/chaicode.png";
import { CatAPIResponse, CatData } from "../types/type";
import CatCardComponent from "./CatCardComponent";
import { CatCardSkelleton } from "./catCardSkelleton";

export default function CatListing() {
  const [data, setData] = useState<CatData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const delay = new Promise((resolve) => setTimeout(resolve, 2000));

  const fetchCatData = async (page: number) => {
    setIsLoading(true);
    await delay;
    try {
      const response = await fetch(
        `https://api.freeapi.app/api/v1/public/cats?page=${page}&limit=4`
      );
      const fetchedCatData: CatAPIResponse = await response.json();
      if (fetchedCatData.data.data.length > 0) {
        setData((prevData) => [...prevData, ...fetchedCatData.data.data]);
        setHasMore(fetchedCatData.data.nextPage);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error while fetching", error);
      alert("Error while fetching cat data.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCatData(page);
  }, [page]);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      if (
        scrollLeft + clientWidth >= scrollWidth - 5 &&
        !isLoading &&
        hasMore
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  };

  return (
    <div className="h-screen w-full bg-black/30">
      <div className="relative">
        <img
          src={catBG}
          alt="Background"
          className="object-cover h-screen w-full bg-repeat-x"
        />
      </div>

      <div className="absolute top-0 h-[80px] p-5 py-1 w-full mb-2">
        <div className="flex w-full justify-between">
          <h2 className="text-5xl text-white font-dmSans font-bold">
            Cats around us
          </h2>

          <a
            href="https://chaicode.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Chaicode}
              alt="Chaicode Logo"
              className="w-[40px] h-[42px]"
            />
          </a>
        </div>
      </div>

      <div
        className="z-50 text-white absolute top-[70px] pl-5 flex items-center gap-x-4 overflow-x-auto text-wrap max-w-[100%]"
        ref={containerRef}
        onScroll={handleScroll}
      >
        {data.length > 0
          ? data.map((cat, index) => (
              <div key={index} className="inline-block mr-4">
                <CatCardComponent data={cat} />
              </div>
            ))
          : Array(4)
              .fill(null)
              .map((_, idx) => <CatCardSkelleton key={idx} />)}

        <div className="flex items-center gap-20">
          {isLoading
            ? Array(4)
                .fill(null)
                .map((_, idx) => <CatCardSkelleton key={idx} />)
            : null}
        </div>
      </div>
    </div>
  );
}
