import React from 'react'
import './Contact.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import  Footer  from '../component/Footer';

const Contact = () => {
    return (
        <div>
            <div className='img' style={{ marginTop: "-23px" }}>
                <h1 className='pt-5 f2'><b>CONTACT US</b></h1>
                <h6 className='CCline'><Link className='CCtext' style={{ color: "white", textDecoration: "none" }} to='/'><b>Home</b></Link></h6>
                <div>
                    <div className='vl CCtcs'></div>
                </div>
                <h6 className='CCtexts'><b>Contact</b></h6>
            </div>
            <div className='container' style={{ background: "#efefef" }}>
                <div className='row'>
                    <div className='col-lg-7'>
                        <div className='CCCone'>
                            <h5 className='CCsub'>GET IN</h5><h1 className='CCsups' style={{ marginTop: "22.5px" }}><b>TOUCH</b></h1>
                        </div>
                        <h4 className='CCleft'><b>WE WOULD LOVE TO HEAR FROM YOU</b></h4>
                        <p className='tl'>We are here to answer any questions you may have regarding Top N Town.
                            Reach out to us and we will respond as soon as we can.
                            We also welcome any suggestions regarding how we can make our brand better
                            to suit your needs, and we promise to provide to the best of our abilities.</p><hr />
                        <div className='row tl'>
                            <div className='col-lg-6 '>
                                <h5><b>CORPORATE ADDRESS</b></h5>
                                <p>Ramani House, 61 B, Kasturba Nagar, Bhopal (M.P.) - 462023
                                    Tel : 0755 4286106</p>

                                <h5><b>DURG PLANT ADDRESS</b></h5>
                                <p>Plot No. 10, Zone-C, Industrial Growth Centre, Borai, Village - Rasmada, Tehsil - Durg, Distt. - Durg (C.G.)
                                    Tel : 0788 2982134</p>

                            </div>
                            <div className='col-lg-6'>
                                <h5><b>BHOPAL PLANT ADDRESS</b></h5>
                                <p>H/46-47, Industrial Area, Govindpura, Bhopal (M.P.) - 462023
                                    Tel : 0755 4046600</p>

                                <h5><b>FOR FRANCHISE</b></h5>
                                <p>Tel : 0755 4046600 Fax: 0755 4252601</p>

                                <h5><b>FOR HR</b></h5>
                                <p>Email: mourya.harsha@topntown.com
                                    Tel: +91 9111808652</p>

                            </div>
                        </div>
                    </div>

                    <div className='col-lg-5'>
                        <div className='CCone'>
                            <h5 className='con Csub'><b>MAIL US YOUR</b></h5><h1 className='CCsup' style={{ marginTop: "1.3px" }}><b>FEEDBACK</b></h1>
                        </div>
                        <div style={{ paddingLeft: '50px', marginTop: "-50px" }}>
                            <form>
                                <div className='form-row'>
                                    <div className='form-group'>
                                        <input type='text' placeholder='FULL NAME' className='form-control' style={{ width: '400px' }} />
                                    </div>
                                    <div className='form-group'>
                                        <input type='text' placeholder='FULL NAME' className='form-control' style={{ width: '400px' }} />
                                    </div>
                                    <div className='form-group'>
                                        <input type='text' placeholder='FULL NAME' className='form-control' style={{ width: '400px' }} />
                                    </div>
                                    <Form.Group controlId='exampleForm.ControlTextarea1'>
                                        <Form.Control as='textarea' rows={4} style={{ width: '400px' }} /><br />
                                    </Form.Group>
                                    <Button className='but' variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <div className='mt-5'>
                <div className='CObackground'><br /><br /><br /><br />
                    <div className='COtransbox animate__animated animate__bounceInLeft'>
                        <div>
                            <img src={require("../Images/icecream-i4.png")} alt='' />
                            <h1 style={{ marginTop: "-5px" }}>WE SIMPLY BELIEVE THAT SIMPLE INGREDIENTS <br /> MAKE A DIFFERENCE.</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <iframe title='google-map' className="gmap_iframe" style={{ width: "800px" }} src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=AnkhubAnkHub Technology Services
3rd Floor, Plot No. 170, Telephone Exchange Square, behind Doctor Dalvi Hospital Complex, Garoba Maidan, Nagpur, Maharashtra 440008&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
            </div>
            <Footer />
        </div>
    )
}

export default Contact
