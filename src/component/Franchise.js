import React from 'react'
import './Franchise.css'
import { Card } from 'antd';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import  Footer  from '../component/Footer';


const Franchise = () => {
  return (
    <div>
      <div className='img' style={{ marginTop: "-23px" }}>
        <h1 className='pt-5 f2'><b>FRANCHISE</b></h1>
        <h6 className='Ftext'><Link style={{ color: "white", textDecoration: "none" }} to='/'><b>Home</b></Link></h6>
        <div>
          <div className='vl Ftcs'></div>
        </div>
        <h6 className='Ftexts'><b>Franchise</b></h6>
      </div>
      <div className='container bot'>
        <div className='Fone'>
          <h5 className='Fsub'>FRANCHISE</h5><h1 className='Fsup' style={{ marginTop: "-7px" }}><b>WITH US</b></h1>
        </div>
        <div className='row'>
          <div className='col-lg-7 left'>
            <p>
              TOP N TOWN offers remunerative opportunities of business for the interested
              entrepreneurs by offering franchisees for ice cream parlours across India.
              The business model is based on the principle of bringing in more profits for
              the franchise and providing comprehensive support in terms of Operations,
              Marketing, Training and Business Development & Inventory Control.
              TOP ’N TOWN is also geared up for the emerging concepts in retailing through
              customized ice cream kiosks for specific and island positions.
              Enterprising people who can own responsibility and ensure commitment
              towards the brand 'TOP ’N TOWN' are welcome.
            </p>
            <ul>
              <li>You should be a dynamic person with acute understanding of consumer behavior.</li>
              <li>You should be financially sound and willing to give quality time to the franchisee.</li>
              <li>Food industry background will have an added advantage.</li>
              <li>People with available real estate at prime locations will get preference.</li>
            </ul>

          </div>
          <div className='col-lg-5 two'>
            <img className='thumb' alt='' src={require("../Images/thumb.jpg")} />
          </div>
        </div>
      </div>
      <div>
        <div className='background'><br/><br/><br/>
          <div className='transbox animate__animated animate__bounceInLeft'>
            <div>
              <h6>"THE SIMPLE MENTION OF TOP N TOWN MAKES PEOPLE SMILE, 
              AND THAT'S THE BIGGEST MOTIVATION ONE CAN GET TO WORK HARDER AND BETTER. 
              FOR THAT SMILE THAT TOP N TOWN GETS ON PEOPLE'S FACES."
                <br />- HARISH RAMANI</h6>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div style={{ background: "#efefef", marginTop: "-16px" }}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <Form className='mt-5'>

                <Card className='top'>
                  <h1 style={{ marginTop: "15px", textAlign: "left" }}>Dealership Enquiry form <hr style={{ marginTop: "15px" }} /></h1>
                  <p className='abc' style={{ marginTop: "-65px" }}>We'll use your information to contact you about our events.
                    We may also share your data with our sales team who may get in
                    touch with you about their products and services</p>
                </Card>

                <Card bordered={true} className='top'>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <h6>Email</h6>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                </Card>

                <Card bordered={true} className='top'>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <h6>Password</h6>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Card>

                <Card bordered={true} className='top'>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <h6>City</h6>
                    <Form.Control type="text" placeholder="City" />
                  </Form.Group>
                </Card>

                <Card bordered={true} className='top'>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <h6>Address</h6>
                    <Form.Control type="text" placeholder="Address" />
                  </Form.Group>
                </Card>

                <Card bordered={true} className='top'>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <h6>Phone No.</h6>
                    <Form.Control type="text" placeholder="text" />
                  </Form.Group>
                </Card>

                <Button className='but mb-3' variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
            <div className='col-lg-6 mt-5'>
              <img className='Fthumb' alt='' src={require("../Images/enqu.jpg")} />
              <div className='Ftwo'>
                <h3 className='Fsup'><b>PARLOUR</b></h3><h5 className='Fsubs'><b>MODEL</b></h5>
              </div>
              <p className='buts'>The best quality products along with contemporary flavors,
                timely services at affordable price make us the first choice for any customer.</p>
              <Button className='but' variant="primary" type="submit">
                Submit
              </Button><br /><br /> <hr />
              <div className='Ftwo'>
                <h3 className='Fsup'><b>DISTRIBUTION </b></h3><h5 className='Fsubs'><b>MODEL</b></h5>
              </div>
              <p className='buts'>Principles of engagement and mutuality bind us with our distributors. Our trade partners are
                strong on relationship and commitment with us.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Franchise
