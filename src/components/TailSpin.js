import React from "react";


export const TailSpin = () => (
  <svg
    width={200}
    height={200}
    viewBox="0 0 38 38"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="loading"
  >
    <defs>
      <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
        <stop stopColor="white" stopOpacity="0" offset="0%" />
        <stop stopColor="white" stopOpacity="0" offset="83.146%" />
        <stop stopColor="white" offset="100%" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(1 1)">
        <circle fill="#9c0039" cx="18" cy="0" r={1}>
          <animateTransform
          className="animate"
            attributeName="transform"
            type="rotate"
            from="360 18 18"
            to="0 18 18"
            begin="2.5s"
            dur="0.5s"
            repeatCount="1"
          />
        </circle>
        <circle fill="aqua" cx="18" cy="3" r={0.9}>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 18"
            to="360 18 18"
            begin="2"
            dur="0.5s"
            repeatCount="1"
          />
        </circle>
        <circle fill="aqua" cx="18" cy="6" r={0.8}>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="360 18 18"
            to="0 18 18"
            begin="1.5s"
            dur="0.5s"
            repeatCount="1"
          />
        </circle>
        <circle fill="aqua" cx="18" cy="9" r={0.7}>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 18"
            to="360 18 18"
            begin="1s"
            dur="0.5s"
            repeatCount="1"
          />
        </circle>
        <circle fill="aqua" cx="18" cy="12" r={0.6}>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="360 18 18"
            to="0 18 18"
            begin="0.5"
            dur="0.5s"
            repeatCount="1"
          />
        </circle>
      </g>
    </g>
  </svg>
);

// TailSpin.propTypes = {
//   height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   color: PropTypes.string,
//   label: PropTypes.string,
//   radius: PropTypes.number
// };

// TailSpin.defaultProps = {
//   height: 80,
//   width: 80,
//   color: "green",
//   radius: 1,
//   label: "audio-loading"
// };
