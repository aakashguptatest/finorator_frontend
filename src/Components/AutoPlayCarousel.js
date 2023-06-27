import React, { useState } from "react";
import "../assets/css/base.css";

function AutoPlayCarousel() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  const items = [
    {
      title: "UNCOVER THE ULTIMATE STOCK TO INVEST IN TODAY !",
      content: "Experience the thrill of financial success with our expert guidance. Stay ahead of the game and unlock the potential of the stock market. Our experts have diligently researched and identified the top-performing stock that holds immense promise for today's investors. Don't miss out on this golden opportunity to make your investments soar!",
      image: "https://upcdn.io/W142hJk/raw/demo/4mM5YxGNKN.png",
    },
    {
      title: "UNCOVER THE ULTIMATE STOCK TO INVEST IN TODAY !",
      content: "Experience the thrill of financial success with our expert guidance. Stay ahead of the game and unlock the potential of the stock market. Our experts have diligently researched and identified the top-performing stock that holds immense promise for today's investors. Don't miss out on this golden opportunity to make your investments soar!",
      image: "https://upcdn.io/W142hJk/raw/demo/4mM5YxGNKN.png",
    },
    {
      title: "UNCOVER THE ULTIMATE STOCK TO INVEST IN TODAY !",
      content: "Experience the thrill of financial success with our expert guidance. Stay ahead of the game and unlock the potential of the stock market. Our experts have diligently researched and identified the top-performing stock that holds immense promise for today's investors. Don't miss out on this golden opportunity to make your investments soar!",
      image: "https://upcdn.io/W142hJk/raw/demo/4mM5YxGNKN.png",
    },
    {
      title: "UNCOVER THE ULTIMATE STOCK TO INVEST IN TODAY !",
      content: "Experience the thrill of financial success with our expert guidance. Stay ahead of the game and unlock the potential of the stock market. Our experts have diligently researched and identified the top-performing stock that holds immense promise for today's investors. Don't miss out on this golden opportunity to make your investments soar!",
      image: "https://upcdn.io/W142hJk/raw/demo/4mM5YxGNKN.png",
    },
    {
      title: "UNCOVER THE ULTIMATE STOCK TO INVEST IN TODAY !",
      content: "Experience the thrill of financial success with our expert guidance. Stay ahead of the game and unlock the potential of the stock market. Our experts have diligently researched and identified the top-performing stock that holds immense promise for today's investors. Don't miss out on this golden opportunity to make your investments soar!",
      image: "https://upcdn.io/W142hJk/raw/demo/4mM5YxGNKN.png",
    },
    {
      title: "UNCOVER THE ULTIMATE STOCK TO INVEST IN TODAY !",
      content: "Experience the thrill of financial success with our expert guidance. Stay ahead of the game and unlock the potential of the stock market. Our experts have diligently researched and identified the top-performing stock that holds immense promise for today's investors. Don't miss out on this golden opportunity to make your investments soar!",
      image: "https://upcdn.io/W142hJk/raw/demo/4mM5YxGNKN.png",
    },
  ];
  const delay = 3500;
  
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
    <div className="slideshow h-auto md:w-[1300px] w-[350px] overflow-x-hidden">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {items.map((item, idx) => (
          <div className="slide bg-[#3D86B0]" key={idx}>
            <div className="flex mt-4 m-2 md:m-8 p-2 md:p-8">
              <div className="md:w-3/4 w-full">
                <div className="text-white md:ml-2 ml-0 px-4 whitespace-normal break-words font-bold text-lg md:text-3xl">
                  {item.title}
                </div>
                <div className="text-white mt-4 pl-4 whitespace-normal break-words mx-2 text-md md:text-2xl">
                  {item.content}
                </div>
                
              </div>
              <div className="w-1/4 hidden md:block my-2">
                <img className="md:scale-125 scale-90" src={item.image} alt="Slide" />
              </div>
            </div>
            <div className="text-white mb-3 rounded-xl font-bold px-4 py-2 max-w-fit mx-auto text-center bg-[#FF8D34] text-xl shadow-lg cursor-pointer hover:shadow-xl">
              Book Now
            </div>
            <div className="slideshowDots mb-2 mx-2">
              {items.map((_, dotIdx) => (
                <div
                  key={dotIdx}
                  className={`slideshowDot${
                    index === dotIdx ? " active" : ""
                  }`}
                  onClick={() => {
                    setIndex(dotIdx);
                  }}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AutoPlayCarousel;
