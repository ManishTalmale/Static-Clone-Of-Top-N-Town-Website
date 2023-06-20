import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <div>
      <div className="video cover mt-3 mb-2">
        {/* <!-- footer --> */}
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-xs-12">
                <div className="first">
                  <h4>My Skills</h4>
                  <p> Analytical Skills</p>
                  <p> Problem-solving skills</p>
                  <p> Critical-thinking skills</p>
                  <p> Detail-oriented</p>
                  <p> Multitasking</p>
                  <p> Self-motivated</p>
                </div>
              </div>

              <div className="col-md-4 col-xs-12">
                <div className="second">
                  <h4> Navigate</h4>
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Franchise</a></li>
                    <li><a href="/">Career</a></li>
                    <li><a href="/">Contact</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-md-4 col-xs-12">
                <div className="third">
                  <h4> Contact</h4>
                  <ul>
                    <li>Top N Town</li>
                    <li><i className="far fa-envelope mr-3"></i>xyz@gmail.com</li>
                    {/* <li><i className="far fa-envelope"></i> email@yahoo.com</li> */}
                    <li><i className="fas fa-map-marker-alt mr-3"></i>Maharashtra,India</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="line"></div>
                <div className="second2">
                  <a href="/" target=""> <i className="fa fa-facebook-square fa-2x margin"></i></a>
                  <a href="/" target=""> <i className="fa fa-instagram fa-2x margin"></i></a>
                  <a href="/" target=""> <i className="fab fa-youtube fa-2x margin"></i></a>
                  <a href="/" target=""><i className="fa fa-whatsapp fa-2x margin" ></i></a>
                  <a href="/" target=""> <i className="fa fa-twitter fa-2x margin"></i></a>

                </div>
                <div className="line"></div>
                <div className='psize'>
                  <p>Order a delicious ice-cream on the go, anywhere, anytime. Top N' Town is happy to assist you with your home delivery.
                    Every time you order, you get a hot and fresh ice-cream delivered at your doorstep in less </p>
                  <p>than thirty minutes. *T&C Apply.</p>
                  <p>Hurry up and visit nearest store now!</p>
                  <p>© 2023 Top N' Town India. All rights reserved. License Number: 10017011004220</p>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Footer
