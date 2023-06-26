import React, { useState } from "react";
import '../assets/css/base.css';


function AutoPlayCarousel() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  const items = [
    {
        title:'UNCOVER THE ULTIMATE STOCK TO INVEST IN TODAY !',
        content:"Experience the thrill of financial success with our expert guidance. Stay ahead of the game and unlock the potential of the stock market. Our experts has diligently researched and identified the top-performing stock that holds immense promise for today's investors. Don't miss out on this golden opportunity to make your investments soar!",
        image:"https://upcdn.io/W142hJk/raw/demo/4mM9SJNTHZ.png"

    },
    {
        title:'UNCOVER THE ULTIMATE STOCK TO INVEST IN TODAY !',
        content:"Experience the thrill of financial success with our expert guidance. Stay ahead of the game and unlock the potential of the stock market. Our experts has diligently researched and identified the top-performing stock that holds immense promise for today's investors. Don't miss out on this golden opportunity to make your investments soar!",
        image:"https://upcdn.io/W142hJk/raw/demo/4mM9SJNTHZ.png"

    },
    {
        title:'UNCOVER THE ULTIMATE STOCK TO INVEST IN TODAY !',
        content:"Experience the thrill of financial success with our expert guidance. Stay ahead of the game and unlock the potential of the stock market. Our experts has diligently researched and identified the top-performing stock that holds immense promise for today's investors. Don't miss out on this golden opportunity to make your investments soar!",
        image:"https://upcdn.io/W142hJk/raw/demo/4mM9SJNTHZ.png"

    }
  ];
  const delay = 2500;
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === items.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {items.map((item, index) => (
          <div
            className="slide bg-blue-400"
            key={index}
          >
            <div>
                <div>
                    <div>
                        {item.title}
                    </div>
                    <div>
                        {item.content}
                    </div>
                </div>
                <div></div>
            </div>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {items.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default AutoPlayCarousel