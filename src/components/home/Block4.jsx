import React from "react";
import i6 from "./p6.png";
import i7 from "./p7.png";
import i8 from "./p8.png";
import i9 from "./p9.png";
import i10 from "./p10.png";

function Block4() {
  return (
    <div className="bg-green-600 h-screen w-full flex flex-col justify-start py-[102px]">
      <div>Our Projects</div>
      <div className="bg-red-200 flex flex-col pt-[60px] ">
        <div className="bg-red-300 flex flex-row  h-[260px] justify-between">
          <img className=""src={i10} alt="img"/>
          <img className=""src={i6} alt="img"/>
        </div>
        <div className="bg-red-500 flex flex-row h-[255px] gap-[30px] justify-between">
        <img className="w-[270px]"src={i7} alt="img"/>
        <img className="w-[470px]"src={i8} alt="img"/>
        <img className="w-[370px]"src={i9} alt="img"/>
        </div>
      </div>
    </div>
  );
}

export default Block4;
