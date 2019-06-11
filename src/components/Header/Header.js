import React from "react";
import "./Header.css";

function Header(props) {
    return <h1 className="title">{props.children}</h1>;
}

export default Header;
