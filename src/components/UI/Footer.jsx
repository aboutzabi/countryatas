import React from "react";
import data from "../../api/footerData.json";
import { AiOutlineEnvironment, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import NavLinks from "./NavLinks";

const Footer = () => {
    const footerIcon = {
        AiOutlineMail: <AiOutlineMail />,
        AiOutlinePhone: <AiOutlinePhone />,
        AiOutlineEnvironment: <AiOutlineEnvironment />
        
    }
  return (
    <footer>
      <div className="footer-contain">
        {data.map((content, index) => {
            const { icon, title, details } = content;
          return (
            <div className="footer-content" key={index}>
                <div className="icon">{footerIcon[icon]}</div>
              <div className="title">{title}</div>
              <div className="details">{details}</div>
            </div>
          );
        })}
        <div className="nav-links">
          <NavLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
