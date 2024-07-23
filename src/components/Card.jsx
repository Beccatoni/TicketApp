import { useState } from "react";
import { cards } from "../data/data";

function Card({ title, price, description, type }) {
  const [isSold, setIsSold] = useState(false);

  const handleBuy = () => {
    setIsSold(true);
  };

  const cardStyles = {
    gold: ["bg-[#EFD29C]", "bg-amber-400", "text-amber-400"],
    silver: ["bg-gray-300", "bg-gray-400", "text-gray-400"],
    platinum: ["bg-blue-00", "bg-blue-500", "text-blue-400"],
  };

const cardStyle = cardStyles[type.toLowerCase()]

  return (
    <div
      className={`w-[19rem] h-[50%] flex flex-col p-2 rounded-md gap-4 ${cardStyle[0]}`}
    >
      <div className={`${cardStyle[1]} w-[18rem] h-[13rem] flex items-center justify-center`}>
        <div className="border-2 border-black h-[10rem] w-[16rem] flex flex-col justify-center text-center rounded-md">
          <p className="font-bold font-Maamli text-2xl">{title}</p>
          <hr className="border-black border-2 w-[70%] self-center" />
          <p>{description}</p>
          <p>
            Only <span className="font-bold">{price}</span>
          </p>
        </div>
      </div>

      <div
        className={`bg-black h-[2.5rem] w-[18rem] rounded-lg ${cardStyle[2]} text-2xl font-semibold text-center cursor-pointer`}
        onClick={handleBuy}
      >
        {isSold ? "Sold" : "Buy"}
      </div>

      <p>
        In the lottery, there are a lot of things available, either a car 🚗, a
        dream home🏘️, a flight to your favorite country✈️... &nbsp;take a
        chance.
      </p>
    </div>
  );
}

export default Card;
