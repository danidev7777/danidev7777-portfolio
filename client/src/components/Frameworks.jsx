import { motion } from "framer-motion";
import css from "../assets/images/css.png";
import html from "../assets/images/html.png";
import react from "../assets/images/react.png";
import redux from "../assets/images/redux.png";
import vs from "../assets/images/vs2.png";
import mongoDB from "../assets/images/mongoDB.jpg";
import boot1 from "../assets/images/boot1.png";
import node from "../assets/images/node.png";
import vite from "../assets/images/vite.svg";
import rr from "../assets/images/rr.png";

import Heart from "./Heart";

const Frameworks = () => {
  return (
    <>
      <div>
        <div className="frameworks-container" data-v-6a509094="">
          {/* Start of row */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} // Starting state
            animate={{ opacity: 1, scale: 1 }} // Animated state
            transition={{
              duration: 1, // Overall animation length
              ease: "easeIn", // Smooth deceleration at the end
              delay: 0.2, // Short pause before starting
              type: "spring",
              stiffness: 80,
              damping: 30, // Make the bounce a bit more controlled
            }}
            className=" pt-4 pl-4"
          >
            <div
              className="framework-row flex"
              style={{ transform: "translate3d(var(--row-offset), 0, 0)" }}
              data-v-6a509094=""
            >
              <div
                target="_blank"
                rel="noopener"
                className="framework-card active"
                data-v-6a509094=""
                data-v-648c64a5=""
              >
                <Heart />
              </div>

              <a
                href=""
                target="_blank"
                rel="noopener"
                className="framework-card active"
                style={{ glowColor: "#18b5f4" }}
                data-v-6a509094=""
                data-v-648c64a5=""
              >
                <img src={html} alt="Qwik" data-v-648c64a5="" />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener"
                className="framework-card active"
                style={{ glowColor: "#be4622" }}
                data-v-6a509094=""
                data-v-648c64a5=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 25 24"
                  height="24"
                  width="25"
                  className="tanuki-logo"
                  role="img"
                  aria-hidden="true"
                >
                  <path
                    fill="#E24329"
                    d="m24.507 9.5-.034-.09L21.082.562a.896.896 0 0 0-1.694.091l-2.29 7.01H7.825L5.535.653a.898.898 0 0 0-1.694-.09L.451 9.411.416 9.5a6.297 6.297 0 0 0 2.09 7.278l.012.01.03.022 5.16 3.867 2.56 1.935 1.554 1.176a1.051 1.051 0 0 0 1.268 0l1.555-1.176 2.56-1.935 5.197-3.89.014-.01A6.297 6.297 0 0 0 24.507 9.5Z"
                    className="tanuki-shape tanuki"
                  ></path>
                  <path
                    fill="#FC6D26"
                    d="m24.507 9.5-.034-.09a11.44 11.44 0 0 0-4.56 2.051l-7.447 5.632 4.742 3.584 5.197-3.89.014-.01A6.297 6.297 0 0 0 24.507 9.5Z"
                    className="tanuki-shape right-cheek"
                  ></path>
                  <path
                    fill="#FCA326"
                    d="m7.707 20.677 2.56 1.935 1.555 1.176a1.051 1.051 0 0 0 1.268 0l1.555-1.176 2.56-1.935-4.743-3.584-4.755 3.584Z"
                    className="tanuki-shape chin"
                  ></path>
                  <path
                    fill="#FC6D26"
                    d="M5.01 11.461a11.43 11.43 0 0 0-4.56-2.05L.416 9.5a6.297 6.297 0 0 0 2.09 7.278l.012.01.03.022 5.16 3.867 4.745-3.584-7.444-5.632Z"
                    className="tanuki-shape left-cheek"
                  ></path>
                </svg>
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener"
                className="framework-card active"
                style={{ glowColor: "#c10f2e" }}
                data-v-6a509094=""
                data-v-648c64a5=""
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_1_878"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="48"
                    height="48"
                  >
                    <path
                      d="M47.4286 0.407997H0.00799561V47.8286H47.4286V0.407997Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_1_878)">
                    <path
                      d="M47.428 0.407997H0.00799561V47.828H47.428V0.407997Z"
                      fill="#F7DF1E"
                    />
                    <path
                      d="M31.864 37.455C32.819 39.015 34.062 40.161 36.26 40.161C38.106 40.161 39.285 39.238 39.285 37.963C39.285 36.435 38.074 35.894 36.041 35.005L34.927 34.527C31.712 33.157 29.576 31.441 29.576 27.813C29.576 24.471 32.122 21.927 36.102 21.927C38.935 21.927 40.972 22.913 42.439 25.495L38.969 27.723C38.205 26.353 37.381 25.813 36.102 25.813C34.796 25.813 33.969 26.641 33.969 27.723C33.969 29.059 34.797 29.601 36.709 30.429L37.823 30.906C41.609 32.529 43.747 34.185 43.747 37.906C43.747 41.918 40.595 44.116 36.363 44.116C32.224 44.116 29.551 42.144 28.243 39.559L31.864 37.455ZM16.122 37.841C16.822 39.083 17.459 40.133 18.99 40.133C20.454 40.133 21.378 39.56 21.378 37.333V22.181H25.834V37.393C25.834 42.007 23.129 44.108 19.18 44.108C15.612 44.108 13.546 42.261 12.495 40.037L16.122 37.841Z"
                      fill="black"
                    />
                  </g>
                </svg>
              </a>

              <a
                href="https://storybook.js.org/"
                target="_blank"
                rel="noopener"
                className="framework-card active"
                style={{ glowColor: "#fd4684" }}
                data-v-6a509094=""
                data-v-648c64a5=""
              >
                <img src={redux} alt="redux" data-v-648c64a5="" />
              </a>

              <a
                href=""
                target="_blank"
                rel="noopener"
                className="framework-card active"
                style={{ glowColor: "#eb4432" }}
                data-v-6a509094=""
                data-v-648c64a5=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 54 33"
                >
                  <g clip-path="url(#prefix__clip0)">
                    <path
                      fill="#38bdf8"
                      fill-rule="evenodd"
                      d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                      clip-rule="evenodd"
                    />
                  </g>
                  <defs>
                    <clipPath id="prefix__clip0">
                      <path fill="#fff" d="M0 0h54v32.4H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener"
                className="framework-card active"
                style={{ glowColor: "#5a45ff" }}
                data-v-6a509094=""
                data-v-648c64a5=""
              >
                <img src={boot1} alt="bootstrap" data-v-648c64a5="" />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener"
                className="framework-card active"
                style={{ glowColor: "#e04e39" }}
                data-v-6a509094=""
                data-v-648c64a5=""
              >
                <img src={react} alt="react" data-v-648c64a5="" />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener"
                className="framework-card active"
                style={{ glowColor: "#ff5c13" }}
                data-v-6a509094=""
                data-v-648c64a5=""
              >
                <img src={vs} alt="vsCode" data-v-648c64a5="" />
              </a>
            </div>
          </motion.div>
          {/* end of row */}
          {/* Start of row */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} // Starting state
            animate={{ opacity: 1, scale: 1 }} // Animated state
            transition={{
              duration: 1, // Overall animation length
              ease: "easeIn", // Smooth deceleration at the end
              delay: 0.4, // Short pause before starting
              type: "spring",
              stiffness: 80,
              damping: 30, // Make the bounce a bit more controlled
            }}
            className=" pt-4 pl-4"
          >
            <div
              className="framework-row flex"
              style={{ transform: "translate3d(var(--row-offset), 0, 0)" }}
              data-v-6a509094=""
            >
              <a
                href=""
                target="_blank"
                rel="noopener"
                className="framework-card active"
                style={{ glowColor: "#18b5f4" }}
                data-v-6a509094=""
                data-v-648c64a5=""
              >
                <img src={rr} alt="react-redux" data-v-648c64a5="" />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener"
                className="framework-card active"
                style={{ glowColor: "#be4622" }}
                data-v-6a509094=""
                data-v-648c64a5=""
              >
                <img src={css} alt="css" data-v-648c64a5="" />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener"
                className="framework-card active"
                style={{ glowColor: "#c10f2e" }}
                data-v-6a509094=""
                data-v-648c64a5=""
              >
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-10 -10 116 111"
                  xmlnsxlink="http://www.w3.org/1999/xlink"
                >
                  <clipPath id="clip">
                    <path d="M0,0h7.75a45.5,45.5 0 1 1 0,91h-7.75v-20h7.75a25.5,25.5 0 1 0 0,-51h-7.75zm36.2510,0h32a27.75,27.75 0 0 1 21.331,45.5a27.75,27.75 0 0 1 -21.331,45.5h-32a53.6895,53.6895 0 0 0 18.7464,-20h13.2526a7.75,7.75 0 1 0 0,-15.5h-7.75a53.6895,53.6895 0 0 0 0,-20h7.75a7.75,7.75 0 1 0 0,-15.5h-13.2526a53.6895,53.6895 0 0 0 -18.7464,-20z" />
                  </clipPath>
                  <linearGradient
                    id="gradient-1"
                    gradientUnits="userSpaceOnUse"
                    x1="7"
                    y1="64"
                    x2="50"
                    y2="107"
                  >
                    <stop offset="0" stop-color="#f9a03c" />
                    <stop offset="1" stop-color="#f7974e" />
                  </linearGradient>
                  <linearGradient
                    id="gradient-2"
                    gradientUnits="userSpaceOnUse"
                    x1="2"
                    y1="-2"
                    x2="87"
                    y2="84"
                  >
                    <stop offset="0" stop-color="#f26d58" />
                    <stop offset="1" stop-color="#f9a03c" />
                  </linearGradient>
                  <linearGradient
                    id="gradient-3"
                    gradientUnits="userSpaceOnUse"
                    x1="45"
                    y1="-10"
                    x2="108"
                    y2="53"
                  >
                    <stop offset="0" stop-color="#b84e51" />
                    <stop offset="1" stop-color="#f68e48" />
                  </linearGradient>
                  <g clip-path="url(#clip)">
                    <path
                      d="M-100,-102m-28,0v300h300z"
                      fill="url(#gradient-1)"
                    />
                    <path
                      d="M-100,-102m28,0h300v300z"
                      fill="url(#gradient-3)"
                    />
                    <path
                      d="M-100,-102l300,300"
                      fill="none"
                      stroke="url(#gradient-2)"
                      strokeWidth="40"
                    />
                  </g>
                </svg>
              </a>

              <a
                href=""
                target="_blank"
                rel="noopener"
                className="framework-card active"
                style={{ glowColor: "#fd4684" }}
                data-v-6a509094=""
                data-v-648c64a5=""
              >
                <svg
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.5194 13.4429C24.4453 13.9533 24.1087 14.6468 23.7226 15.2497C23.2354 16.0105 22.4622 16.5433 21.5774 16.7283L17.6797 17.5434C17.0533 17.6744 16.4852 18.0022 16.0587 18.479L13.503 21.3357C13.0227 21.8725 12.687 21.7445 12.687 21.0244C12.6812 21.0511 11.4186 24.3072 14.7646 26.2371C16.0502 26.9787 17.9009 26.7122 19.1865 25.9707L25.9983 22.0416C28.5458 20.5722 30.3445 18.0863 30.9424 15.2089C30.966 15.095 30.9843 14.9808 31.004 14.8667L24.5194 13.4429Z"
                    fill="url(#paint0_linear_2484_3243)"
                  />
                  <path
                    d="M22.7528 9.51774C24.0384 10.2593 24.5637 11.3633 24.5637 12.8464C24.5637 13.0477 24.5479 13.2466 24.5194 13.4425L27.2641 14.6215L31.004 14.8663C31.4829 12.0948 30.5444 9.24202 28.862 6.97445C27.5959 5.268 25.9667 3.78714 24.0081 2.65738C22.417 1.73966 20.7636 1.13501 19.1025 0.803223L17.2361 3.22023L16.6465 5.99559L22.7528 9.51774Z"
                    fill="url(#paint1_linear_2484_3243)"
                  />
                  <path
                    d="M0.783597 11.5518C0.782899 11.554 0.784832 11.5546 0.78556 11.5524C0.929583 11.1205 1.11018 10.6385 1.33564 10.1237C2.51334 7.4343 4.78286 5.64062 7.57492 4.72608C10.367 3.81156 13.4155 4.13212 15.9601 5.59988L16.6465 5.99578L19.1025 0.803412C11.291 -0.756765 3.30728 3.83253 0.793528 11.5217C0.792327 11.5254 0.787957 11.5382 0.783597 11.5518Z"
                    fill="url(#paint2_linear_2484_3243)"
                  />
                  <path
                    d="M18.9199 25.9704C17.6343 26.712 16.0503 26.712 14.7647 25.9704C14.5902 25.8697 14.4257 25.7566 14.2701 25.634L12.0091 27.1885L10.0603 30.3376C12.2233 32.1377 15.0321 32.7164 17.839 32.3945C19.9513 32.1523 22.0495 31.4832 24.0082 30.3534C25.5992 29.4357 26.9501 28.3075 28.0682 27.0361L26.9063 24.2128L25.0262 22.4482L18.9199 25.9704Z"
                    fill="url(#paint3_linear_2484_3243)"
                  />
                  <path
                    d="M14.2701 25.6341C13.2796 24.8539 12.6872 23.6572 12.6872 22.3754V22.2476V11.5724C12.6872 10.9687 12.865 10.8661 13.3884 11.168C12.5823 10.703 10.7203 9.10701 8.42118 10.4331C7.13557 11.1747 6.0769 12.8116 6.0769 14.2946V22.1529C6.0769 25.0917 7.59906 28.1573 9.79448 30.1133C9.88132 30.1906 9.97122 30.2636 10.0603 30.3377L14.2701 25.6341Z"
                    fill="url(#paint4_linear_2484_3243)"
                  />
                  <path
                    d="M27.9105 5.8123C27.909 5.8106 27.9075 5.81197 27.909 5.81368C28.2114 6.15428 28.5389 6.5515 28.8725 7.00399C30.6149 9.36765 31.2659 12.3613 30.6627 15.2343C30.0594 18.1072 28.2573 20.5846 25.7126 22.0523L25.0262 22.4482L28.0683 27.0361C33.3265 21.0576 33.3401 11.8554 27.9316 5.83594C27.9291 5.83306 27.9201 5.82287 27.9105 5.8123Z"
                    fill="url(#paint5_linear_2484_3243)"
                  />
                  <path
                    d="M6.34355 14.2944C6.34354 12.8113 7.13552 11.4408 8.42113 10.6993C8.59565 10.5986 8.77601 10.5129 8.96002 10.4395L8.74304 7.70603L7.21862 4.57861C4.57671 5.55005 2.4397 7.55766 1.31528 10.1471C0.469097 12.0957 9.792e-06 14.2458 0 16.5052C0 18.3407 0.302549 20.0735 0.845533 21.6767L3.87391 22.083L6.34355 21.3387V14.2944V14.2944Z"
                    fill="url(#paint6_linear_2484_3243)"
                  />
                  <path
                    d="M8.96003 10.4395C10.1316 9.97264 11.4652 10.0584 12.5763 10.6993L12.6871 10.7632L21.5825 15.8941C22.2065 16.254 22.1498 16.6082 21.4445 16.7557L21.9577 16.6484C22.6329 16.5072 23.2498 16.1621 23.7216 15.6592C24.5327 14.7946 24.8305 13.7515 24.8305 12.8463C24.8304 11.3632 24.0385 9.99274 22.7529 9.2512L15.941 5.32209C13.3935 3.85267 10.3394 3.53934 7.5461 4.46083C7.4356 4.49727 7.32744 4.5386 7.21863 4.57861L8.96003 10.4395Z"
                    fill="url(#paint7_linear_2484_3243)"
                  />
                  <path
                    d="M19.3222 32.1523C19.3245 32.1518 19.3241 32.1498 19.3218 32.1503C18.8753 32.2417 18.3673 32.3264 17.8083 32.3888C14.8881 32.7145 11.9676 31.781 9.77876 29.8225C7.58999 27.8641 6.3436 25.0662 6.3436 22.1307L6.34359 21.3389L0.845581 21.6769C3.39893 29.2156 11.369 33.8285 19.2912 32.1588C19.295 32.158 19.3083 32.1553 19.3222 32.1523Z"
                    fill="url(#paint8_linear_2484_3243)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2484_3243"
                      x1="20.0599"
                      y1="24.2701"
                      x2="23.2075"
                      y2="13.307"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#1724C9" />
                      <stop offset="1" stop-color="#1C64F2" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_2484_3243"
                      x1="27.3093"
                      y1="10.9001"
                      x2="19.0297"
                      y2="2.64962"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#1C64F2" />
                      <stop offset="1" stop-color="#0092FF" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_2484_3243"
                      x1="16.1645"
                      y1="5.52115"
                      x2="3.67432"
                      y2="6.3104"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0092FF" />
                      <stop offset="1" stop-color="#45B2FF" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_2484_3243"
                      x1="15.3198"
                      y1="29.1626"
                      x2="26.5366"
                      y2="26.1359"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#1C64F2" />
                      <stop offset="1" stop-color="#0092FF" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_2484_3243"
                      x1="7.26881"
                      y1="16.1827"
                      x2="15.2325"
                      y2="24.4347"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#1724C9" />
                      <stop offset="1" stop-color="#1C64F2" />
                    </linearGradient>
                    <linearGradient
                      id="paint5_linear_2484_3243"
                      x1="25.4505"
                      y1="22.1356"
                      x2="31.007"
                      y2="10.9345"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0092FF" />
                      <stop offset="1" stop-color="#45B2FF" />
                    </linearGradient>
                    <linearGradient
                      id="paint6_linear_2484_3243"
                      x1="5.36387"
                      y1="9.63067"
                      x2="2.39054"
                      y2="20.8063"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#1C64F2" />
                      <stop offset="1" stop-color="#0092FF" />
                    </linearGradient>
                    <linearGradient
                      id="paint7_linear_2484_3243"
                      x1="20.5431"
                      y1="9.09912"
                      x2="9.67768"
                      y2="11.8044"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#1724C9" />
                      <stop offset="1" stop-color="#1C64F2" />
                    </linearGradient>
                    <linearGradient
                      id="paint8_linear_2484_3243"
                      x1="6.40679"
                      y1="21.8566"
                      x2="13.3326"
                      y2="32.2745"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0092FF" />
                      <stop offset="1" stop-color="#45B2FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </a>

              <a
                href=""
                target="_blank"
                rel="noopener"
                className="framework-card active"
                style={{ glowColor: "#eb4432" }}
                data-v-6a509094=""
                data-v-648c64a5=""
              >
                <img src={mongoDB} alt="mongoDB" data-v-648c64a5="" />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener"
                className="framework-card active group-hover:from-purple-600 group-hover:to-blue-500"
                style={{ glowColor: "#5a45ff" }}
                data-v-6a509094=""
                data-v-648c64a5=""
              >
                <img src={vite} alt="Vite" data-v-648c64a5="" />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener"
                className="framework-card active"
                style={{ glowColor: "#e04e39" }}
                data-v-6a509094=""
                data-v-648c64a5=""
              >
                <img src={node} alt="EmberJS" data-v-648c64a5="" />
              </a>
              <div
                target="_blank"
                rel="noopener"
                className="framework-card active"
                data-v-6a509094=""
                data-v-648c64a5=""
              >
                <Heart />
              </div>
            </div>
          </motion.div>
          {/* end of row */}
        </div>
      </div>
    </>
  );
};

export default Frameworks;
