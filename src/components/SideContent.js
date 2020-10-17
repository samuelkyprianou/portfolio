import React from "react";
import { SocialIcon } from "react-social-icons";

export default function SideContent({ direction }) {
  const createSideContet = () => {
    if (direction === "left") {
      return (
        <ul>
        <li>
          <SocialIcon
            bgColor="rgba(0, 0, 0, 0)"
            fgColor="aqua"
            url="https://www.linkedin.com/in/sam-kyprianou/"
            className="icons"
            target="_blank"
          />
        </li>
        <li>
          <SocialIcon
            bgColor="rgba(0, 0, 0, 0)"
            fgColor="aqua"
            url="https://github.com/samuelkyprianou/"
            className="icons"
            target="_blank"
          />
        </li>
        <li>
          <SocialIcon
            bgColor="rgba(0, 0, 0, 0)"
            fgColor="aqua"
            url="https://www.instagram.com/samuelkipper/"
            className="icons"
            target="_blank"
          />
        </li>
        <div className="side-lines"></div>
      </ul>
      );
    }
    else {
        return (
            <div className="content">
            <a href="mailto:samuelkyprianou@gmail.com">
            samuelkyprianou@gmail.com
            </a>
            <div className="side-lines"></div>
        </div>
        )
    }
  };
  return (
    <div
      className={
        direction === "left"
          ? "side-content-wrapper left"
          : "side-content-wrapper right"
      }
    >
            {createSideContet()}
    </div>
  );
}
