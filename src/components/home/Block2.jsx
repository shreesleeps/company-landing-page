import React from "react";
import i3 from "./P3.png";
import i4 from "./P4.png";
import i5 from "./P5.png";

function Block2() {
  return (
    <div className="w-full bg-green-600 h-screen py-[102px] flex flex-row">
      <div className="bg-orange-400 flex-grow flex flex-row  ">
        <div className="bg-red-200 flex flex-col h-full w-1/2">
          <img className="w-full h-full pl-[100px] pt-[30px] pr-[30px] pb-[30px]" src={i3} alt="img" />
          <img className="w-full h-full pl-[100px] pr-[30px] "src={i5} alt="img" />
        </div>
        <div className="bg-red-400 h-full w-1/2">
          <img className="w-full h-full pt-[60px] pb-[30px] flex justify-end" src={i4} alt="img" />
        </div>
      </div>
      <div className="bg-green-100 w-[500px] flex flex-col ">
        <div className="pl-[30px] pt-[30px] pr-[302px] pb-[20px]">ABOUT</div>
        <div className="pl-[30px] pr-[70px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </div>
        <div className="bg-green-100 pl-[30px] pt-[20px]">
          <button>READ MORE</button>
        </div>
      </div>
    </div>
  );
}

export default Block2;
