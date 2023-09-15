import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/humbertoguadalupe1/" },
  { Social: <FaTwitter />, link: "https://twitter.com/HalonsoJPG" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/halonso.io/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/humberto-guadalupe-alonso-l%C3%B3pez-94b439229/" },
  { Social: <FaPinterestP />, link: "https://www.pinterest.com.mx/alonsohumberto0401/" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
