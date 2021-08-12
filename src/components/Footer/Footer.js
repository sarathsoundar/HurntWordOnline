import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
       <h1>Developed by Sarath</h1>
      </span>
      <div className="iconContainer">
           
      <a href="https://www.instagram.com/sarathsoundar?r=nametag ">
      <img src="https://img.icons8.com/color/48/000000/instagram-new--v2.png" alt="img"/></a>

          <a href="https://twitter.com/Sarathsoundar?s=08">
          <img src="https://img.icons8.com/color/48/000000/twitter--v1.png" alt="img"/></a>
         
    
      <a href="https://www.linkedin.com/in/sarath-kumar-4087341a6 ">
      <img src="https://img.icons8.com/color/48/000000/linkedin-circled--v1.png" alt="img"/></a> 
        
      </div>
    </div>
  );
};

export default Footer;
