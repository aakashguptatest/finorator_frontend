import React from 'react'
import Carousel from 'react-grid-carousel'

const InfiniteCarousel = () => {
  const data = [
    {
        image:"https://upcdn.io/W142hJk/raw/demo/4mM4A9fyA5.png",
        title:"Stock Trading"
    },
    {
        image:"https://upcdn.io/W142hJk/raw/demo/4mM4A9fyA5.png",
        title:"Stock Trading"
    },
    {
        image:"https://upcdn.io/W142hJk/raw/demo/4mM4A9fyA5.png",
        title:"Stock Trading"
    },
    {
        image:"https://upcdn.io/W142hJk/raw/demo/4mM4A9fyA5.png",
        title:"Stock Trading"
    },
    {
        image:"https://upcdn.io/W142hJk/raw/demo/4mM4A9fyA5.png",
        title:"Stock Trading"
    },
    {
        image:"https://upcdn.io/W142hJk/raw/demo/4mM4A9fyA5.png",
        title:"Stock Trading"
    }
  ]

  const options = [
    {
      breakpoint: 800,
      cols: 3,
      rows: 1,
      gap: 10,
      loop: true,
      autoplay: 1000
    }
  ]
  return (
    <div className="mt-24">
        <Carousel options={options}>
        {data.map((item) => {
            return (
                <Carousel.Item className="mt-8 text-center text-2xl" key={item.title}>
                    <img src={item.image} alt={item.title} />
                    <h3>{item.title}</h3>
                </Carousel.Item>
            );
            })}
        </Carousel>
    </div>
  )
}

export default InfiniteCarousel