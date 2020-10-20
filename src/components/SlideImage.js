import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";

export default function SlideImage({ img, width, height }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    cacheImages(img);
  }, [img]);

  const cacheImages = async (src) => {
    await new Promise(function (resolve, reject) {
      let img = new Image();
      img = src;
      img.onload = resolve();
      img.onerror = reject();
    });
    
    setTimeout(function(){setIsLoading(false); }, 2000);
  };

  return (
    <>
      {isLoading ? (
        <Loader
        className="slide"
          type="TailSpin"
          color="white"
          width={width}
        />
      ) : (
        <img src={img} alt="slide" style={{width: width, height: height}}></img>
      )}
    </>
  );
}
