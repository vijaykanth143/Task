import React, { Component } from "react";

import { IoSearchOutline } from 'react-icons/io5'
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export class Header extends Component {
  render() {
    return (
      <div className="bg-1">
        <img
          src="https://berighthere.com/wp-content/uploads/2022/01/BRH-logo-expanded.png"
          alt="logo"
          className="logo"
        />
        <div className="bg-2">
          <h2 className="text">
            Corporate <br />
            Desk
          </h2>
          <input type="search" placeholder="Search here..." className="Searchbox" />
          <IoSearchOutline className="icon"/>
        </div>
      </div>
    );
  }
}


