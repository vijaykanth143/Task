import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { AiFillCar } from "react-icons/ai";
import { BiWifi } from "react-icons/bi";
import { FaStore } from "react-icons/fa";
import {RiMotorbikeFill} from "react-icons/ri"
import "./index.css";

export class Main extends Component {
  render() {
    return (
      <div className="card1">
        <div className="card2">
          <img
            className="offimg"
            alt="offimg"
            src="https://images.adsttc.com/media/images/5ebd/403c/b357/658b/d400/0139/large_jpg/_DSC3779.jpg?1589460999"
          />
          <div>
            <p className="view">Name</p>
            <p className="vv">Chennai</p>
          </div>
          <div>
            <p className="view">Plans</p>
            <p className="viewn">7</p>
          </div>
          <div>
            <p className="view">Resources</p>
            <p className="viewn">24</p>
          </div>
          <div>
            <p className="view">Status</p>
            <p className="vv">Active</p>
          </div>
          <p className="view2">View CCTV</p>
        </div>
        <div className="add">
          {" "}
          <div className="card3">
            <div className="ag1">
              <p className="agreement">Agreement start</p>
              <p className="date">Start Date</p>
            </div>
            <div className="d-flex">
              <p className="agreement">Agreement End</p>
              <p className="date2">Start Date</p>
            </div>
            <p className="tc">Property T&C</p>
          </div>
          <div className="card4">
            <div className="add1">
              <p className="pa">Address</p>
              <p className="pe">Edit</p>
            </div>
            <p className="ppp">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              No comm Give feedback, ask discussion
            </p>
          </div>
        </div>
        <p className="pa ppi">Property Images</p>
        <Carousel variant="dark">
          <div className="listimg">
            <img
              className="offimg2"
              src="https://images.adsttc.com/media/images/5ebd/403c/b357/658b/d400/0139/large_jpg/_DSC3779.jpg?1589460999"
              alt="img"
            />
            <img
              className="offimg2"
              src="https://timesnext.com/wp-content/uploads/2020/11/office-space-for-rent-in-mohali-1068x580.jpg"
              alt="img"
            />
            <img
              className="offimg2"
              src="https://strongproject.com/office-furniture-blog/wp-content/uploads/2019/06/proxyclick-visitor-management-system-1627171-unsplash-1.jpg"
              alt="img"
            />
            <img
              className="offimg2"
              src="https://media.strongproject.com/r/611x297/61241747ca993.jpg"
              alt="img"
            />
            <img
              className="offimg2"
              src="https://strongproject.com/office-furniture-blog/wp-content/uploads/2019/07/4eee2ffffd7503a70e6acd5be52f1eee.jpg"
              alt="img"
            />
          </div>
        </Carousel>
        <div className="details">
          <p className="dp">Plan Details</p>
          <p className="dp1">Service Details</p>
          <p className="dp">Inclusive/Exclusive Details</p>
        </div>

        <div className="card6">
          <p className="pa1">Value Added Services</p>
          <div className="sebg">
            <div className="service">
              <AiFillCar className="seicon" />
              <p className="pa2">CarParking</p>
            </div>
            <p className="pa2">10 Units</p>
            <p className="pa2">5 Rs/Unit</p>
            <p className="pa3">50 Rs</p>
          </div>
          <div className="sebg">
            <div className="service">
              <BiWifi className="seicon" />
              <p className="pa2">Wifi</p>
            </div>
            <p className="pa2 p1">10 Units</p>
            <p className="pa2 ">5 Rs/Unit</p>
            <p className="pa3">50 Rs</p>
          </div>
          <div className="sebg">
            <div className="service">
              <FaStore className="seicon" />
              <p className="pa2">Pantry</p>
            </div>
            <p className="pa2 p0">10 Units</p>
            <p className="pa2 ">5 Rs/Unit</p>
            <p className="pa3">50 Rs</p>
          </div>
          <p className="pa1 pt-3 mb-3">Free Services</p>
          <div className="d-flex pb-4 jj" >
            {" "}
            <div className="service">
              <AiFillCar className="seicon" />
              <p className="pa2 p5">CarParking</p>
            </div>
            <div className="service">
              <RiMotorbikeFill className="seicon" />
              <p className="pa2 p5">Bike Parking</p>
            </div>
            <div className="service">
              <BiWifi className="seicon" />
              <p className="pa2 p5">Wifi</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
