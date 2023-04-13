import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


export default function SliderSegment() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item> 
        <div className="carousel-item active">
              <div className="row car-row">
                <div className="col-lg-2 col-12 col-sm-6 col-xl-2">
                  <div className="segment-card">
                    <div className="card-holder">
                    <img src={require("./static/assets/stocks.svg").default} alt="Stocks Icon" />
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
                      <img src={require("./static/assets/stocks.svg").default}/>
                      <div className="card-title">Mutual Funds</div>
                      <p className="theme-p">Coming Soon !</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-12 col-sm-6 col-xl-2">
                  <div href="https://www.gibl.in/?source=1000051793">
                    <div className="segment-card">
                      <div className="card-holder">
                        <img src={require("./static/assets/insurance.svg" ).default}/>
                        <div className="card-title">Insurance</div>
                        <p className="theme-p theme-color">
                          <a href="https://www.gibl.in/?source=1000051793"
                            >Live Now !</a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-12 col-sm-6 col-xl-2">
                  <div className="segment-card">
                    <div className="card-holder">
                      <img src={require("./static/assets/Loans.svg" ).default}/>
                      <div className="card-title">Loans</div>
                      <p className="theme-p">Coming Soon !</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        </Carousel.Item>
        <Carousel.Item>
        <div className="carousel-item">
              <div className="row car-row">
                <div className="col-lg-2 col-12 col-sm-6 col-xl-2">
                  <div className="segment-card">
                    <div className="card-holder">
                      <img src={require("./static/assets/income-tax.svg" ).default}/>
                      <div className="card-title">Income tax</div>
                      <p className="theme-p">Coming Soon !</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-12 col-sm-6 col-xl-2">
                  <div className="segment-card">
                    <div className="card-holder">
                      <img src={require("./static/assets/real-estate.svg" ).default}/>
                      <div className="card-title">Real Estate</div>
                      <p className="theme-p">Coming Soon !</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </Carousel.Item>
              </Carousel>
              </>
  )
  }  
  
  