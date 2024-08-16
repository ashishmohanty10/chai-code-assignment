import randomuser from "/randomUserBG.png";
import { MdOutlineRefresh } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlinePhone } from "react-icons/hi";
import Chaicode from "/chaicode.png";
import { useState } from "react";
import { defaultUserData, randomUser } from "../types/type";
import { RiLoader2Line } from "react-icons/ri";

export default function Randomeuser() {
  const [data, setData] = useState<randomUser>(defaultUserData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const delay = new Promise((resolve) => setTimeout(resolve, 2000));

  const handleFetch = async () => {
    setIsLoading(true);
    await delay;
    try {
      const response = await fetch(
        `https://api.freeapi.app/api/v1/public/randomusers/user/random`
      );
      const fetchedData = await response.json();
      setData(fetchedData);
    } catch (error) {
      alert("Error while Fetching");
      console.log("Error while Fetching", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#0f0f0f] h-screen w-full">
      <div className="relative">
        <img
          src={randomuser}
          alt="BG Img"
          className="object-cover h-screen w-full"
        />
      </div>

      <div className="z-20 w-[358px] h-[610px] bg-[#B6B3F3] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl border-8 border-white py-8 px-3 flex flex-col justify-evenly">
        {/* Heading */}
        <div className="flex items-center justify-between mb-8">
          <button>
            <FaArrowLeft className="text-xl" />
          </button>
          <p className="text-base font-dmSerifText">Profile Overview</p>
          <button onClick={handleFetch}>
            <MdOutlineRefresh className="text-xl" />
          </button>
        </div>

        {/* Profile  */}
        {isLoading ? (
          <div className="flex items-center justify-center h-full animate-spin">
            <RiLoader2Line />
          </div>
        ) : (
          <div>
            <div className="flex items-center flex-col space-y-5 mb-3">
              <div className="w-[100px] h-[100px] bg-gray-300 rounded-full overflow-hidden flex items-center justify-center">
                <img src={data?.data.picture.large} alt="" />
              </div>

              <div className="text-center flex flex-col space-y-1">
                <h1 className="text-2xl font-donegal tracking-wide">
                  <span>{data?.data.name.first}</span>{" "}
                  <span>{data?.data.name.last}</span>
                </h1>

                <p className="font-dmSans text-xs">
                  {data?.data.login.username}
                </p>
              </div>
            </div>

            {/* Location and phne */}
            <div className="border-t border-b  border-slate-900/10 flex items-center justify-center py-4 gap-8">
              <div className="flex items-center  gap-2">
                <div className="w-[22px] h-[22px] rounded-full bg-black flex items-center justify-center">
                  <a href={data.data.location.country}>
                    <IoLocationOutline className="text-white" />
                  </a>
                </div>
                <p className="text-[9px] font-dmSans">Location</p>
              </div>

              <div className="flex items-center  gap-2">
                <div className="w-[22px] h-[22px] rounded-full bg-black flex items-center justify-center">
                  <HiOutlinePhone className="text-white" />
                </div>
                <p className="text-[9px] font-dmSans">Call me</p>
              </div>
            </div>

            {/* Info */}
            <div className="grid grid-cols-2 justify-between items-center gap-y-5 gap-x-5 pt-6 mb-12">
              <div>
                <p className="font-dmSans text-[9px]">City</p>
                <p className="font-dmSerifText text-lg">
                  {data?.data.location.city}
                </p>
              </div>
              <div>
                <p className="font-dmSans text-[9px]">Nationalty</p>
                <p className="font-dmSerifText text-lg">
                  {data?.data.location.country}
                </p>
              </div>

              <div>
                <p className="font-dmSans text-[9px]">Date of birth</p>
                <p className="font-dmSerifText text-lg">
                  {data?.data?.dob.date
                    ? new Date(data?.data?.dob.date).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                        }
                      )
                    : "Date not available"}
                </p>
              </div>

              <div>
                <p className="font-dmSans text-[9px]">Phone No.</p>
                <p className="font-dmSerifText text-lg">{data?.data.phone}</p>
              </div>

              <div>
                <p className="font-dmSans text-[9px]">Time Zone</p>
                <p className="font-dmSerifText text-lg">
                  {data?.data.location.timezone.offset} (
                  {data?.data.location.timezone.description.split(", ").pop()})
                </p>
              </div>

              <div>
                <p className="font-dmSans text-[9px]">Registered Since</p>
                <p className="font-dmSerifText text-lg">
                  {data?.data?.registered?.date
                    ? new Date(data.data.registered.date).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                        }
                      )
                    : "Date not available"}
                </p>
              </div>
            </div>

            <p className="text-center text-white/40 font-bold text-[8px]">
              © chai aur code
            </p>

            <a
              href={"https://chaicode.com/"}
              target="_blank"
              className="absolute bottom-3 right-4"
              rel="noopener noreferrer"
            >
              <img src={Chaicode} alt="" className="w-[60px] h-[62px]" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
