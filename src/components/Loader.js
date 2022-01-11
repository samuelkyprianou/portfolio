import React, { useEffect } from "react";
import { TailSpin } from "./TailSpin.js";
import ScrollAnimation from "react-animate-on-scroll";

export default function Loader({ setIsLoading }) {

  useEffect(() => {
    const imgs = [
      require("../images/webp/shell-survey1.webp"),
      require("../images/webp/shell-survey2.webp"),
      require("../images/webp/shell-survey3.webp"),
      require("../images/webp/shell-survey4.webp"),
      require("../images/webp/shell-metals1.webp"),
      require("../images/webp/shell-metals2.webp"),
      require("../images/webp/shell-metals3.webp"),
      require("../images/webp/food-find1.webp"),
      require("../images/webp/food-find2.webp"),
      require("../images/webp/food-find3.webp"),
      require("../images/webp/snappy-parking1.webp"),
      require("../images/webp/snappy-parking2.webp"),
      require("../images/webp/snappy-parking3.webp"),
      require("../images/webp/snappy-parking4.webp"),
      require("../images/webp/umber1.webp"),
      require("../images/webp/umber2.webp"),
      require("../images/webp/umber3.webp"),
      require("../images/webp/volta1.webp"),
      require("../images/webp/volta2.webp"),
      require("../images/webp/volta3.webp"),
      require("../images/background.png"),
      require("../images/profile.jpeg"),
      require("../images/profile.webp"),
      require("../images/stars.png"),
      require("../images/twinkling.png"),
    ];
    cacheImages(imgs);
  });

  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) => {
      return new Promise(function (resolve, reject) {
        let img = new Image();
        img.onload = function(){resolve(src)};
        img.onerror = function(){reject(src)};
        img.src = src;
      })
    });
    await Promise.allSettled(promises)
      setTimeout(function () {
        setIsLoading(false);
      }, 5000)

  };

  return (
    <div
      className="loader"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <TailSpin />

      <ScrollAnimation
        animateIn="fadeIn"
        duration={1.5}
        animateOnce={true}
        delay={1000}
        className="loading-text"
      >
        SK
      </ScrollAnimation>
    </div>
  );
}
