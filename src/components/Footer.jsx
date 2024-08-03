import React from "react";
import { useEffect, useState } from "react";
import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

    return (
        <div className="footer text-center">
        <p> 
          &copy; {currentYear} 
          <a href="http://hanannawaz.me" target="_blank">
            {" "}
            hanannawaz.me  {"  "}
          </a>
          All Rights Reserved.
        </p>
        <p className="pink-text-gradient">Theme by <a href="https://github.com/shinchancode" target="_blank">
            {" "}
            shinchancode
          </a></p>

      </div>
    );
  };
  
  export default Footer;