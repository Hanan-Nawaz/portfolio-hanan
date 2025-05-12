import React from "react";
import { useEffect, useState } from "react";
import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

    return (
        <div className="footer text-center">
        <p> 
           &copy; 2025 
          <a href="http://hanannawaz.me" target="_blank">
            {" "}
            hanannawaz.me  {"  "}
          </a>
          
        </p>
        

      </div>
    );
  };
  
  export default Footer;