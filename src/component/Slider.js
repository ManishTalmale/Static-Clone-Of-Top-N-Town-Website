import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';
import Home from './Home';
import './Slider.css'
import Footer  from '../component/Footer';


const Slider = () => {
  const [dotPosition, setDotPosition] = useState('right');
  // eslint-disable-next-line
  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };
  return (
    <>
      <div>
        <div className=''>
          <Carousel muted loop autoPlay={true}  dotPosition={dotPosition}>
            <div>
              <img src={require("../Images/1.jpg")} alt='' />
            </div>
            <div>
              <img src={require("../Images/2.jpg")} alt='' />
            </div>
            <div>
              <img src={require("../Images/3.jpg")} alt='' />
            </div>
            <div>
              <img src={require("../Images/4.jpg")} alt='' />
            </div>
            <div>
              <img src={require("../Images/5.jpg")} alt='' />
            </div>
            <div>
              <img src={require("../Images/6.jpg")} alt='' />
            </div>
            <div>
              <img src={require("../Images/7.jpg")} alt='' />
            </div>
            <div>
              <img src={require("../Images/8.jpg")} alt='' />
            </div>
          </Carousel>
        </div>
      </div>
      <hr/>
      <div className='wel'>
      <h1><b >WELCOME TO TOP 'N TOWN</b></h1><br/>
      <p className='para' style={{marginTop:"20px"}}>We are a family who love crafting lip smackingly delicious ice cream.
        From elaborate lunches and dinners, to a romantic night under the stars,
        our flavors bring people together. To craft brilliant ice cream, you need brilliant people.
        They’re one of the most important ingredients. Our team is constantly working with flavors
        to surprise you and to ensure that you taste a little
        bit of magic with every bite of our ice-cream.</p>
        </div>
      <hr />
      <div className='container bot'>
        <div className='one'>
          <h4 className='sub'><b>OUR</b></h4><h1 className='sup' style={{marginTop:"-15.5px"}}><b>BRANDS</b></h1>
        </div>
        <div className='row'>
          <div className='col-lg-7 left'>
            <p>
              We, as a business unit, have always believed in growing and expanding into new dimensions.
              From the ice creams we headed towards crafting Cakes, pastries and other bakery
            </p>
            <p>items with TOP 'N TOWN Bakers from the year 2007.</p>
            <p>
              Understanding the importance of imparting quality education in the state of
              Madhya Pradesh we got into Education sector
              with Trinity Institute of Technology and Research which was setup in 2008.
            </p>
            <p>The next step was towards the real estate and Ishaan Builders came up as a revolution in the builder’s guild in 2009.
              The newest benchmark was set with the introduction of Cremeore, an ice cream boutique, which brought in the flavours of ice creams
              from all around the world in a platter and served it to Bhopal in 2015</p>
          </div>
          <div className='col-lg-5 two'>
          <Home />
          </div>
        </div>
      </div>
      <div className='back'>
<div className='row'>
  <div className='col-lg-4'>
 <img style={{marginTop:"90px"}} src={require("../Images/top-n-town.png")} alt=''/>
  </div>
  <div className='col-lg-4 white'>
    <h3>QUALITY</h3>
    <p>At TOP 'N TOWN, we give maximum<br />significance to the quality of our
       products and<br /> have got certifications from Quality<br /> Management 
       ISO 9001 : 2015 and Food Safety <br />Management System ISO 22000 : 2005</p>
  </div>
  <div className='col-lg-4 white'>
    <h3>CORPORATE ADDRESS</h3>
    <p>Ramani Icecream Company<br /> Limited, Ramani House,<br />
61 B, Kasturba Nagar, Bhopal<br /> (M.P.) - 462023<br />
Tel : 0755 4286106</p>
  </div>
</div>
      </div>
      <Footer />
    </>
  );
};
export default Slider;
