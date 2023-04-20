import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./App.css"

function Sliderreview() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

  
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
                  <div className="testimony-card">
                    <div className="testimony-body">
                      <img src={require("./static/assets/testimony-icon.svg").default} />
                      <div className="cont">
                        I always thought that insuring my car and home was a
                        tedious and expensive process. But I found out about
                        Finorator and it has changed all of that. It covers
                        everything from personal to commercial insurance so I
                        don't have to go through the hassle of looking for
                        different companies or compare prices. And the best part
                        is that it's all online so no one knows what
                        <br />
                        <div className="star-rating">
                          <label  htmlFor="5-stars" className="star">&#9733;</label>
                          <label  htmlFor="4-stars" className="star">&#9733;</label>
                          <label  htmlFor="3-stars" className="star">&#9733;</label>
                          <label  htmlFor="2-stars" className="star">&#9733;</label>
                          <label htmlFor="1-star" className="star">&#9733;</label>
                        </div>
                        <b>Basudev Pradhan</b>
                        <br />
                        Physiotherapist
                      </div>
                    </div>
                  </div>
        </Carousel.Item>
        <Carousel.Item>
                  <div className="testimony-card">
                    <div className="testimony-body">
                      <img src={require("./static/assets/testimony-icon.svg").default} />
                      <div className="cont">
                        I love the convenience of Finorator. It's so easy to
                        compare, select, and purchase an insurance plan. I find
                        myself checking it every day. I'm so grateful for this
                        online platform!
                        <br />
                        <div className="star-rating">
                          <label htmlFor="5-stars" className="star">&#9733;</label>
                          <label htmlFor="4-stars" className="star">&#9733;</label>
                          <label htmlFor="3-stars" className="star">&#9733;</label>
                          <label htmlFor="1-star" className="star">&#9733;</label>
                        </div>
                        <b>Vipin Patel</b>
                        <br />
                        Businessman
                      </div>
                    </div>
                  </div>

        </Carousel.Item>
        <Carousel.Item>
                  <div className="testimony-card">
                    <div className="testimony-body">
                      <img src={require("./static/assets/testimony-icon.svg").default} />
                      <div className="cont">
                        Finorator is a simple and effective solution to the
                        time-consuming task of getting insurance. It's very easy
                        to use and I was able to find a policy for my new Audi
                        A8 with just a few clicks. It gave me all the options,
                        from basic insurance for low-cost coverage to
                        comprehensive insurance with high premiums. I found it
                        extremely easy to narrow
                        <br />
                        <div className="star-rating">
                          <label htmlFor="5-stars" className="star">&#9733;</label>
                          <label htmlFor="4-stars" className="star">&#9733;</label>
                          <label htmlFor="3-stars" className="star">&#9733;</label>
                          <label htmlFor="2-stars" className="star">&#9733;</label>
                          <label htmlFor="1-star" className="star">&#9733;</label>
                        </div>
                        <b>B. Shreyash</b>
                        <br />
                        Entrepreneur
                      </div>
                    </div>
                  </div>
        </Carousel.Item>      
      
        <Carousel.Item>
                  <div className="testimony-card">
                    <div className="testimony-body">
                      <img src={require("./static/assets/testimony-icon.svg").default} />
                      <div className="cont">
                        I can't believe how affordable Finorator is. I was
                        looking for a cheaper insurance policy and found out
                        that they offer a whole range of plans that can fit any
                        budget. This has been one of the most useful and best
                        products I've ever used.
                        <br />
                        <div className="star-rating">
                          <label htmlFor="5-stars" className="star">&#9733;</label>
                          <label htmlFor="4-stars" className="star">&#9733;</label>
                          <label htmlFor="1-star" className="star">&#9733;</label>
                        </div>
                        <b>Venkat Vyas</b>
                        <br />
                        Designer
                      </div>
                    </div>
                  </div>

        </Carousel.Item>      
        <Carousel.Item>
                  <div className="testimony-card">
                    <div className="testimony-body">
                      <img src={require("./static/assets/testimony-icon.svg").default} />
                      <div className="cont">
                        Finorator is a great online insurance platform. They
                        have a very user-friendly interface and they offer their
                        clients really competitive prices. I am so glad I
                        switched to them, the only thing I regret is not doing
                        it sooner
                        <br />
                        <div className="star-rating">
                          <label htmlFor="5-stars" className="star">&#9733;</label>
                          <label htmlFor="4-stars" className="star">&#9733;</label>
                          <label htmlFor="3-stars" className="star">&#9733;</label>
                          <label htmlFor="2-stars" className="star">&#9733;</label>
                        </div>
                        <b>Navin Shukla</b>
                        <br />
                        Student
                      </div>
                    </div>
                  </div>
        </Carousel.Item>      
        <Carousel.Item>
                  <div className="testimony-card">
                    <div className="testimony-body">
                      <img src={require("./static/assets/testimony-icon.svg").default} />
                      <div className="cont">
                        I am about to purchase my first car and I was really
                        looking forward to getting coverage. I did not know much
                        about insurance in general, let alone online insurance.
                        Thankfully, Finorator came in when I needed it the most.
                        It made all the process hassle-free and helped me
                        understand the basics of insurance policies.
                        <br />
                        <div className="star-rating">
                          <label htmlFor="5-stars" className="star">&#9733;</label>
                          <label htmlFor="4-stars" className="star">&#9733;</label>
                          <label htmlFor="3-stars" className="star">&#9733;</label>
                          <label htmlFor="2-stars" className="star">&#9733;</label>
                          <label htmlFor="1-star" className="star">&#9733;</label>
                        </div>
                        <b>Abhishek Ram</b>
                        <br />
                        Chartered Accountant
                      </div>
                    </div>
                  </div>
        </Carousel.Item> 
        <Carousel.Item>
                  <div className="testimony-card">
                    <div className="testimony-body">
                    <img src={require('./static/assets/testimony-icon.svg')} alt="Testimony Icon" />
                      <div className="cont">
                        I've been using Finorator for a while now and I love it.
                        It's so much cheaper than the other policies I found in
                        the market. I also love how simple it is to use. The
                        best thing about Finorator is that I can get a quote in
                        just a few minutes, instead of having to spend hours on
                        paperwork and waiting for approval
                        <br />
                        <div className="star-rating">
                          <label htmlFor="5-stars" className="star">&#9733;</label>
                          <label htmlFor="4-stars" className="star">&#9733;</label>
                          <label htmlFor="3-stars" className="star">&#9733;</label>
                          <label htmlFor="1-star" className="star">&#9733;</label>
                        </div>
                        <b>Akhilesh Kumar</b>
                        <br />
                        Data Analyst
                      </div>
                    </div>
                  </div>
            </Carousel.Item>
            <Carousel.Item>
                  <div className="testimony-card">
                    <div className="testimony-body">
                      <img src={require("./static/assets/testimony-icon.svg").default} />
                      <div className="cont">
                        I never leave reviews but I was so pleased with my
                        experience. I buy things online all the time and have
                        been too lazy to get insurance. My purchase was stolen
                        in transit and these guys were able to refund me. It was
                        really quick, easy, and hassle-free. I am so happy!
                        <br />
                        <div className="star-rating">
                          <label htmlFor="5-stars" className="star">&#9733;</label>
                          <label htmlFor="4-stars" className="star">&#9733;</label>
                          <label htmlFor="3-stars" className="star">&#9733;</label>
                        </div>
                        <b>pooja Agrawal</b>
                        <br />
                        MBBS Doctor
                      </div>
                    </div>
                  </div>

                </Carousel.Item>
                <Carousel.Item>
                  <div className="testimony-card">
                    <div className="testimony-body">
                      <img src={require("./static/assets/testimony-icon.svg").default} />
                      <div className="cont">
                        I had purchased an online insurance policy from
                        finorator that covers online purchases in case of any
                        damage to the product during shipping. I've never had to
                        make a claim, but I know that it's great for peace of
                        mind.
                        <br />
                        <div className="star-rating">
                          <label htmlFor="5-stars" className="star">&#9733;</label>
                          <label htmlFor="4-stars" className="star">&#9733;</label>
                          <label htmlFor="3-stars" className="star">&#9733;</label>
                          <label htmlFor="1-star" className="star">&#9733;</label>
                        </div>
                        <b>Rishi Sharma</b>
                        <br />
                        Business Owner
                      </div>
                    </div>
                  </div>
                    </Carousel.Item>     
        </Carousel>
      
    );
  }
  export default Sliderreview;