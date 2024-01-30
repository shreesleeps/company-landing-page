import React, { useState } from "react";
import i1 from "../images/P1.jpg";
import i2 from "../images/P2.png";
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

function Block1({ scrollToTop }) {
  const navigate = useNavigate();

  const featPro = [
    { heading: "Sample", subHeading: "Project1", image: i1, to: "/project/1" },
    { heading: "Sample", subHeading: "Project2", image: i2, to: "" },
  ];
  const [ind, setInd] = useState(0);

  return (
    <div className="w-full h-[calc(100vh-100px)] pb-[50px] flex flex-row">
      <div className="h-full flex-grow flex flex-col justify-end gap-[90px] items-start relative">
        <div className="w-full flex flex-col items-start absolute top-[50%] -translate-y-[50%]">
          <div className="h1">{featPro[ind].heading}</div>
          <div className="h2">{featPro[ind].subHeading}</div>
        </div>
        <div className="flex flex-col gap-8 w-full items-start">
          <div className="flex flex-row items-center w-full">
            <button
              className="w-[53px] h-[53px] border border-[#d4d4d4] hover:bg-[#F9F9F9] an mr-[23px] flex items-center justify-center group"
              onClick={() => {
                setInd((cur) => {
                  if (cur <= 0) {
                    return featPro.length - 1;
                  }
                  return cur - 1;
                });
              }}
            >
              <LuMoveLeft className="text-[#333333] group-hover:-translate-x-1 an" />
            </button>
            <button
              className="w-[53px] h-[53px] border border-[#d4d4d4] hover:bg-[#F9F9F9] an flex items-center justify-center group"
              onClick={() => {
                setInd((cur) => {
                  if (cur >= featPro.length - 1) {
                    return 0;
                  }
                  return cur + 1;
                });
              }}
            >
              <LuMoveRight className="text-[#333333] group-hover:translate-x-1 an" />
            </button>
            <div className="h-[1px] flex-grow bg-[#d4d4d4]"></div>
          </div>
          <div className="flex flex-row w-full gap-8 items-center">
            <div className="pagiD">
              {ind + 1 < 10 ? `0${ind + 1}` : `${ind + 1}`}
            </div>
            <div className="h-[44px] w-[2px] skew-x-[135deg] bg-[#bdbdbd]"></div>
            <div className="pagi">
              {featPro.length < 10 ? `0${featPro.length}` : `${featPro.length}`}
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-[60%] relative overflow-clip">
        {featPro.map((item, index) => {
          return (
            <img
              key={index}
              className={`w-full h-full object-cover absolute left-0 right-0 translate-x-[${
                (index - ind) * 100
              }%] hover:scale-105 an`}
              src={item.image}
              alt="img"
            />
          );
        })}

        <button
          onClick={() => {
            scrollToTop();
            navigate(`/project/${ind}`);
          }}
          className="bg-[white] w-max absolute bottom-0 left-0 h-[70px] pl-[20px] pr-[50px] flex flex-row items-center gap-[18px] border border-[white] hover:border-[#d4d4d4] group an"
        >
          <p className="b1">View Project</p>
          <LuMoveRight className="text-[#333333] group-hover:translate-x-2 an" />
        </button>
      </div>
    </div>
  );
}

export default Block1;
