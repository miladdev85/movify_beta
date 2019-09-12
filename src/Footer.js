import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="m-0">Movify™ by Milad Hashemi</p>
      <Link to="/faq" className="text-decoration-none">
        FAQ
      </Link>
    </footer>
  );
}

export default Footer;
