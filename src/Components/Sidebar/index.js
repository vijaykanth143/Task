import React, { Component } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsBuilding } from "react-icons/bs";
import { ImLink } from "react-icons/im";
import { IoPeopleOutline, IoNotificationsOutline } from "react-icons/io5";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { MdOutlineContactSupport } from "react-icons/md";
import {Main} from "../Main"
import "./index.css";

export class Side extends Component {
  render() {
    return (
      <div className="d-flex">
        <div className="bg-3">
          <div className="bg-5">
            <div className="bg-4">
              <img
                className="user"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc-zb9WUjHtT7DpU48febyqbrXSFsuT_8ei3sSmulSWvCauq8Z"
                alt="user"
              />
              <h1 className="dot">.</h1>
            </div>
            <p className="userp">User</p>
            <RiArrowDropDownLine className="usericon" />
          </div>
          <div className="icons">
            <AiOutlineDashboard className="usericon1" />
            <p className="userp1">Dashboard</p>
          </div>
          <div className="icons">
            <BsBuilding className="usericon" />
            <p className="userp">Property</p>
          </div>
          <div className="icons">
            <IoPeopleOutline className="usericon" />
            <p className="userp">Employee</p>
          </div>
          <div className="icons">
            <ImLink className="usericon" />
            <p className="userp">Link</p>
          </div>
          <div className="icons">
            <IoNotificationsOutline className="usericon" />
            <p className="userp">Notifications</p>
          </div>
          <div className="icons">
            <BiMessageRoundedDetail className="usericon" />
            <p className="userp">Messages</p>
          </div>
          <div className="icons2">
            <MdOutlineContactSupport className="usericon2" />
            <p className="userp2">Map</p>
          </div>
          <div className="icons">
            <MdOutlineContactSupport className="usericon" />
            <p className="userp">Help Desk</p>
          </div>
        </div>
        <div className="m-bg">
          <h1 className="hh">Mapped Properties</h1>
          <p className="pp">
            Home/<span> Map</span>
          </p>
          <Main/>
        </div>
      </div>
    );
  }
}

export default Side;
