import catBG from "/cat.png";
import Chaicode from "/chaicode.png";

export default function CatListing() {
  return (
    <div className="h-screen w-full bg-black/30">
      <div className="relative ">
        <img
          src={catBG}
          alt="random Jokes background"
          className="object-cover h-screen w-full bg-no-repeat"
        />
      </div>

      <div className="absolute top-0 p-10 w-full">
        <div className="flex  w-full justify-between">
          <h2 className="text-5xl text-white font-dmSans font-bold">
            Cats around us
          </h2>

          <a href={"https://chaicode.com/"} target="_blank">
            <img src={Chaicode} alt="" className="w-[60px] h-[62px]" />
          </a>
        </div>
      </div>
    </div>
  );
}
