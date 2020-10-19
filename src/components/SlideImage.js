import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";

export default function SlideImage({ img, width }) {
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
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <Loader
          type="Puff"
          color="white"
          height={"100%"}
          width={width}
          visible={isLoading}
        />
      ) : (
        <div
          className="slide"
          style={{
            background: `url(${img}), center`,
            width: width,
          }}
        ></div>
      )}
    </>
  );
}
