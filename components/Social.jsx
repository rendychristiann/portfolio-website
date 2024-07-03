import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/rendychristiann" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/rendy-christian-siahaan/" },
  { icon: <FaYoutube />, path: "https://www.youtube.com/channel/UC7lNb_YHd8MkKtynWq50mAA" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/rendychristian_/" },
];

const Social = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((item, index) => {
        return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
    })}
  </div>;
};

export default Social;
