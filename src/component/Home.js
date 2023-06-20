import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  return (
    <div>
<Carousel muted loop autoPlay={true}>
                <div>
                    <img alt='' src={require("../Images/first.jpg")} />
                </div>
                <div>
                    <img alt='' src={require("../Images/second.jpg")} />
                </div>
                <div>
                    <img alt='' src={require("../Images/third.jpg")} />
                </div>
                <div>
                    <img alt='' src={require("../Images/fourth.jpg")} />
                </div>
            </Carousel>

    </div>
  )
}

export default Home
