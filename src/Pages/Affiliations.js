import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function SliderAffiliations() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel  activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        {" "}
        <div
          style={{
            display: "flex",
            alignContent: "center",
            // alignContent: "center",
          }}
          className=""
        >
          <div
            className="row"
            style={{
              display: "flex",
              alignitems: "center",
              justifycontent: "center",
              paddingbottom: "4em",
            }}
          >
            <div className="col-lg-2 col-12 col-sm-6 col-xl-2">
              <div className="step-card">
                <img alt="" src={require("../assets/static/assets/startuplogo_trans.png")} />
              </div>
            </div>
            <div className="col-lg-2 col-12 col-sm-6 col-xl-2">
              <div className="step-card">
                <img alt="" src={require("../assets/static/assets/36inc.png")} />
              </div>
            </div>
            <div className="col-lg-2 col-12 col-sm-6 col-xl-2">
              <div className="step-card">
                <img alt=""
                  src={require("../assets/static/assets/Startup India Logo1-02.png")}
                />
              </div>
            </div>
            <div className="col-lg-2 col-12 col-sm-6 col-xl-2">
              <div className="step-card">
                <img alt="" src={require("../assets/static/assets/msme.webp")} />
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="row"
          style={{
            display: "flex",
            alignitems: "center",
            justifycontent: "center",
            paddingbottom: "4em",
          }}
        >
          <div className="col-lg-2 col-12 col-sm-6 col-xl-2">
            <div className="step-card">
              <img alt="" src={require("../assets/static/assets/BSestarMF.gif")} />
              <div className="description">
                Member Code-
                <b>52145</b>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-12 col-sm-6 col-xl-3">
            <div className="step-card">
              <img alt="" src={require("../assets/static/assets/amfi.jpeg")} />
              <div className="description">
                Member Code-
                <b>147019</b>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-12 col-sm-6 col-xl-2">
            <div className="step-card">
              <img alt="" src={require("../assets/static/assets/dealsofloan.png")} />
            </div>
          </div>
          <div className="col-lg-2 col-12 col-sm-6 col-xl-2">
            <div className="step-card">
              <img alt="" src={require("../assets/static/assets/pos-gibl-logo.jpeg")} />
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
