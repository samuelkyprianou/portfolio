import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="sociallinks-wrapper">
        <ul>
          <li>
            <SocialIcon
              bgColor="rgba(0, 0, 0, 0)"
              fgColor="aqua"
              url="https://www.linkedin.com/in/sam-kyprianou/"
              className="footer-icons"
              target="_blank"
            />
          </li>
          <li>
            <SocialIcon
              bgColor="rgba(0, 0, 0, 0)"
              fgColor="aqua"
              url="https://github.com/samuelkyprianou/"
              className="footer-icons"
              target="_blank"
            />
          </li>
          <li>
            <SocialIcon
              bgColor="rgba(0, 0, 0, 0)"
              fgColor="aqua"
              url="https://www.instagram.com/samuelkipper/"
              className="footer-icons"
              target="_blank"
            />
          </li>
        </ul>
      </div>
      <div className="credit-wrapper">
        <a href="https://github.com/samuelkyprianou">
          <div>Disgned & Built by Sam Kyprianou</div>
        </a>
      </div>
    </footer>
  );
}
