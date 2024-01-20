import React from "react";
import Block1 from "./home/Block1";
import Block2 from "./home/Block2";
import Block3 from "./home/Block3";
import Block4 from "./home/Block4";

function Home() {
  return (
    <div className="px-[130px] w-screen h-screen overflow-y-auto">
      <Block1 />
      <Block2 />
      <Block3 />
      <Block4 />
    </div>
  );
}

export default Home;
