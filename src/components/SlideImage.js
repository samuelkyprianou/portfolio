import React from "react";
import ImgWithFallback from "../components/ImgWithFallback";

export default function SlideImage({ img, width, height }) {
  // const imageUrlPng = require(`../images/${img}.png`)
  const imageUrlWebp = require(`../images/webp/${img}.webp`);

  return (
    <>
      <ImgWithFallback
        src={imageUrlWebp}
        alt="slide"
        style={{ width: width, height: height }}
      />
    </>
  );
}
