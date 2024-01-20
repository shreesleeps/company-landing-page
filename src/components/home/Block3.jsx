import React from "react";

function Block3() {
  return (
    <div className="bg-red-700 h-screen w-full flex flex-col justify-start py-[102px]">
      <div className="bg-pink-300 h-[30%] flex ">Main Focus/Mission Statement</div>
      <div className="bg-pink-500 h-[70%] flex flex-row justify-between ">
        <div className="bg-pink-100 w-50% h-full flex flex-row gap-[30px]">
          <div>1</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            efficitur, lectus et facilisis placerat.
          </div>
        </div>
        <div className="bg-pink-50 w-50% h-full flex flex-row gap-[30px] ">
        <div>2</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            efficitur, lectus et facilisis placerat.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Block3;
