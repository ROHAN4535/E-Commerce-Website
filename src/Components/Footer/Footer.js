import React from "react";
import { FaYoutube, FaSpotify, FaFacebook } from 'react-icons/fa';

const h1Styling = {
  fontFamily: "Times New Roman",
  fontSize: "55px",
  fontWeight: "bold",
  marginLeft: '3rem',
  color: 'white'
};

const Footer = () => {
  return (
    <div className="d-flex align-items-center bg-info p-3">
      <h1 style={h1Styling}>The Generics</h1>
      <ul className="list-unstyled d-flex mb-0 ms-auto">
        <li className="me-3 ">
          <a href="#youtube"> <FaYoutube style={{color: 'red',backgroundColor: 'white',fontSize: '24px'}}/></a>
        </li>
        <li className="me-3">
          <a href="#spotify"> <FaSpotify style={{color: 'green',backgroundColor: 'white',fontSize: '24px'}}/></a>
        </li>
        <li>
          <a href="#facebook"><FaFacebook style={{color: 'blue',backgroundColor: 'white',fontSize: '24px'}}/></a>
        </li>
      </ul>
    </div>
  );
};
export default Footer;