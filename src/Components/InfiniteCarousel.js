import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import "../assets/css/infinitecarousel.css";

function InfiniteCarousel() {
  const [currentIndex1, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [nextIndex, setNextIndex] = useState(null);
  const timeoutRef = useRef(null);
  const items = [
    {
      title: "STOCK TRADING",
      image: "https://upcdn.io/W142hJk/raw/demo/4mM2b8A277.png",
    },
    {
      title: "STOCK TRADING",
      image: "https://upcdn.io/W142hJk/raw/demo/4mM2b8A277.png",
    },
    {
      title: "STOCK TRADING",
      image: "https://upcdn.io/W142hJk/raw/demo/4mM2b8A277.png",
    },
    {
      title: "STOCK TRADING",
      image: "https://upcdn.io/W142hJk/raw/demo/4mM2b8A277.png",
    },
    {
      title: "STOCK TRADING",
      image: "https://upcdn.io/W142hJk/raw/demo/4mM2b8A277.png",
    },
    {
      title: "STOCK TRADING",
      image: "https://upcdn.io/W142hJk/raw/demo/4mM2b8A277.png",
    },
    // Add more items as needed
  ];
  const delay = 3500;
  const slidesToShow = 3;

  const setIndex = (currentIndex) => {
    setPrevIndex(currentIndex1);
    setCurrentIndex(currentIndex);
    setNextIndex((currentIndex + slidesToShow) % items.length);
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrentIndex((prevIndex) => (prevIndex + slidesToShow) % items.length),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex1]);

  return (
    <div className="slideshow h-auto md:w-[1300px] w-[350px] overflow-x-hidden">
      <div className="arrow prev" onClick={() => setIndex(prevIndex)}>
        <BsFillArrowLeftCircleFill/>
      </div>
      <div className="arrow next" onClick={() => setIndex(nextIndex)}>
        <BsFillArrowRightCircleFill/>
      </div>
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-currentIndex1 * 100/3}%, 0, 0)` }}
      >
        {items.map((item, idx) => (
          <div className="slide bg-slate-100 border-blue-400 border-2" key={idx}>
            <div><img src={item.image} alt="" /></div>
            <div className="text-center">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfiniteCarousel;
