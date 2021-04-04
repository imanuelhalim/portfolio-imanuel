import React from "react";
import { Link } from "react-router-dom";
// import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPuzzlePiece } from "react-icons/fa"
import { FaGithubSquare } from "react-icons/fa";
import Puzzle from "../content/Puzzle";

const { useEffect, useState } = React;

function useWindowSize() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}

const Footer = () => {
  const [iconSize, setIconSize] = useState(0);

  const email = "imanuelhalim1991@gmail.com";
  // const facebook = "https://facebook.com/halimimanuel/";
  const github = "https://github.com/imanuelhalim/";
  // const instagram = "https://instagram.com/imanuel.halim/";
  const linkedin = "https://linkedin.com/in/imanuelhalim/";

  const widthScreenSize = useWindowSize();

  useEffect(() => {
    if (widthScreenSize > 959) {
      setIconSize(35);
    } else if (widthScreenSize >= 768 && widthScreenSize <= 959) {
      setIconSize(22);
    }
  }, [widthScreenSize]);

  return (
    <div className="footer">
      <div className="footer-content">
        Designed and Built by Imanuel Halim &#169; 2021
      </div>
      <ul className="list-social-media">
        <li>
          <MdEmail
            size={iconSize}
            onClick={() => {
              window.location.href = `mailto: ${email}`;
            }}
          />
        </li>
        {/* <li>
              <FaFacebookSquare size={iconSize}
                onClick={() => {
                  window.open(`${facebook}`, "_blank");
                }}
            
              />
            </li> */}
        <li>
          <FaGithubSquare
            size={iconSize}
            onClick={() => {
              window.open(`${github}`, "_blank");
            }}
          />
        </li>
        {/* <li>
              <FaInstagram size={iconSize}
                onClick={() => {
                  window.open(`${instagram}`, "_blank");
                }}
            
              />
            </li> */}
        <li>
          <FaLinkedin
            size={iconSize}
            onClick={() => {
              window.open(`${linkedin}`, "_blank");
            }}
          />
        </li>
        <li>
        <Link to="/puzzle">
          <FaPuzzlePiece
            size={iconSize}
            onClick={() => {
              window.scrollTo(0, 0);
            }}  
          />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
