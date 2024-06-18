import React, { useContext } from "react";
import AppContexts from "../../Сontexts/AppContexts";

import "./Footer.scss";

function Footer() {
  const { loading } = useContext(AppContexts);

  if (loading) return null;

  return <p className="footer">Евгений Игнатюк &copy; 2024</p>;
}

export default Footer;
