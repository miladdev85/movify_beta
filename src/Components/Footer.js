import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const style = {
    backgroundColor: "#f7f7f7",
    textAlign: "center",
    padding: "18px 0",
    position: "absolute",
    marginTop: 100,
    bottom: 0,
    width: "100%",
    color: "rgb(171, 171, 171)",
    borderTop: "1px solid #ccc"
  };

  return (
    <footer style={style}>
      <p className="m-0">Movify™ by Milad Hashemi</p>
      <Link to="/faq" className="text-decoration-none">
        FAQ
      </Link>
    </footer>
  );
}

export default Footer;
