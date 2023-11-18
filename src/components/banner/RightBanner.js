import React from 'react'
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center">
      <img
        className="w-[300px] h-[300px] lgl:w-[500px] lgl:h-[500px] object-cover rounded-full z-10"
        src={bannerImg}
        alt="bannerImg"
      />
    </div>
  );
}

export default RightBanner;
