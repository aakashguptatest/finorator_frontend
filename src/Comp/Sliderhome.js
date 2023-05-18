import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Lottie from "lottie-react";
import a from "./static/assets/undraw_investing_7u74.json";
import b from "./static/assets/135363-mutual-funds-investment.json";
import c from "./static/assets/Comp 1.json";
import d from "./static/assets/142101-easy-loan.json";
import e from "./static/assets/72203-income-tax.json";
import f from "./static/assets/99232-real-estate.json";
import "./App.css";

export default function SliderSegment() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div className="row car-row">
            <div className="col-lg-2 col-12 col-sm-6 col-xl-2">
              <div className="segment-card">
                <div className="card-holder">
                  <Lottie
                    loop={true}
                    animationData={a}
                    style={{ height: 200 }}
                  />{" "}
                  <div className="card-title">
                    Shares & Stocks
                    <p className="theme-p">Coming Soon !</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-12 col-sm-6 col-xl-2">
              <div className="segment-card">
                <div className="card-holder">
                  <Lottie
                    loop={true}
                    animationData={b}
                    style={{ height: 200 }}
                  />
                  <div className="card-title">Mutual Funds</div>
                  <p className="theme-p">Coming Soon !</p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-12 col-sm-6 col-xl-2">
              <div href="https://www.gibl.in/?source=1000051793">
                <div className="segment-card">
                  <div className="card-holder">
                    <Lottie
                      loop={true}
                      animationData={c}
                      style={{ height: 200 }}
                    />
                    <div className="card-title">Insurance</div>
                    <p className="theme-p theme-color">
                      <a href="https://www.gibl.in/?source=1000051793">
                        Live Now !
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-12 col-sm-6 col-xl-2">
              <div className="segment-card">
                <div className="card-holder">
                  <Lottie
                    loop={true}
                    animationData={d}
                    style={{ height: 200 }}
                  />
                  <div className="card-title">Loans</div>
                  <p className="theme-p">Coming Soon !</p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row car-row">
            <div className="col-lg-2 col-12 col-sm-6 col-xl-2">
              <div className="segment-card">
                <div className="card-holder">
                  <Lottie
                    loop={true}
                    animationData={e}
                    style={{ height: 200 }}
                  />
                  <div className="card-title">Income tax</div>
                  <p className="theme-p">Coming Soon !</p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-12 col-sm-6 col-xl-2">
              <div className="segment-card">
                <div className="card-holder">
                  <Lottie
                    loop={true}
                    animationData={f}
                    style={{ height: 200 }}
                  />
                  <div className="card-title">Real Estate</div>
                  <p className="theme-p">Coming Soon !</p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
