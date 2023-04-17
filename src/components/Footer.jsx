import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCaretUp, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  // faCodepen,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <footer className="bg-emerald-800 dark:bg-emerald-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-300 sm:justify-start">
              <a
                className="px-2 hover:text-white"
                href="https://github.com/JustenMX"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              {""}
              {/* <a
                className="px-2 hover:text-white"
                href="https://vercel.com/justenmx"
              >
                <FontAwesomeIcon icon={faCaretUp} />
              </a> */}
              {""}
              {/* <a
                className="px-2 hover:text-white"
                href="https://codepen.io/JustenM"
              >
                <FontAwesomeIcon icon={faCodepen} />
              </a> */}
              {""}
              <a
                className="px-2 hover:text-white"
                href="https://www.linkedin.com/in/justenmanni/"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              {""}
              {/* <a
                className="px-2 hover:text-white"
                href="https://generalassemb.ly"
              >
                <FontAwesomeIcon icon={faGraduationCap} />
              </a> */}
            </div>
            <p className="mt-4 text-sm text-center text-gray-400 lg:text-right lg:mt-0">
              MIT License Copyright &copy; 2023 |
              <a
                className="hover:text-white"
                href="https://github.com/JustenMX"
              >
                {""} @JustenMX
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
