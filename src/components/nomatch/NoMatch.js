import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/image/404-img.jpg";

export default function NoMatch(props) {
  return (
    <div className="NoMatch">
      <img src={img} alt="404" />
      <Link to="/"></Link>
    </div>
  );
}
