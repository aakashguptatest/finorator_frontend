import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./App.css"

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
                            <div class="row" style={{justifyContent:  "center"}}>
                                <div class="team-card col-xl-3 col-lg-4">
                                    <img src={require("./static/assets/team/image 38.png")} />
                                    <h3>S. Agrawal<br /><span style={{fontSize: 16}}>(Chartered Accountant)</span></h3>
                                    <p>Founder</p>
                                </div>
                                <div class="team-card col-xl-3 col-lg-4">
                                    <img src={require("./static/assets/team/image 40.png")} />
                                    <h3>K. APOORV</h3>
                                    <p>Founder</p>
                                </div>
                                <div class="team-card col-xl-3 col-lg-4">
                                    <img src={require("./static/assets/team/image 42.png")} />
                                    <h3>Ayush Agrawal<br /><span style={{fontSize: 16}}>(Chartered Accountant)</span></h3>
                                    <p>Product Development Manager</p>
                                </div>
                            </div>
                       
              </Carousel.Item>

      <Carousel.Item>

                            <div class="row" style={{justifyContent:  "center"}}>
                                <div class="team-card col-lg-4 col-xl-3">
                                    <img src={require("./static/assets/team/image 41.png")} />
                                    <h3>Dikshita Agrawal<br /><span style={{fontSize: 16}}>(Company Secretary)</span></h3>
                                    <p>Legal & Financial Head</p>
                                </div>
                                <div class="team-card col-xl-3 col-lg-4">
                                    <img src={require("./static/assets/team/image 39.png")} />
                                    <h3>Anjali Patel</h3>
                                    <p>HR Manager</p>
                                </div>
                                <div class="team-card col-xl-3 col-lg-4">
                                    <img src={require("./static/assets/team/image 43.png")} />
                                    <h3>Indra Pratap Singh</h3>
                                    <p>Senior Operational Manager</p>
                                </div>
                            </div>
                

              </Carousel.Item>
      
    </Carousel>
  );
}

export default ControlledCarousel;