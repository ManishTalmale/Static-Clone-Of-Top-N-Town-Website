import React from 'react'
import Button from 'react-bootstrap/Button';
import './Career.css'
import { Link } from 'react-router-dom';
import 'animate.css';
import  Footer  from '../component/Footer';

const Career = () => {
    return (
        <div>
            <div className='img' style={{ marginTop: "-23px" }}>
                <h1 className='pt-5 f2'><b>CAREER</b></h1>
                <h6 className='Ctext'><Link style={{ color: "white", textDecoration: "none" }} to='/'><b>Home</b></Link></h6>
                <div>
                    <div className='vl Ctcs'></div>
                </div>
                <h6 className='Ctexts'><b>Career</b></h6>
            </div>

            <div className='mb-5'>
                <div className='CAbackground'><br /><br /><br /><br />
                    <div>
                        <div className='CAtransbox animate__animated animate__bounceInLeft'>
                            <div>
                                <img src={require("../Images/icecream-i4.png")} alt='' />
                                <h1 style={{ marginTop: "-5px" }}>WE SIMPLY BELIEVE THAT SIMPLE INGREDIENTS <br /> MAKE A DIFFERENCE.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container mb-2' style={{ background: "#efefef" }}>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='Cone'>
                            <h4 className='Csub'>WORKING WITH</h4><h1 className='Csup' style={{ marginTop: "-3.5px" }}><b>TOP 'N' TOWN</b></h1>
                        </div>
                        <h5 className='Cleft' style={{ marginTop: "-50px" }}><b>WE WOULD LOVE TO HEAR FROM YOU</b></h5>
                        <p className='Ctleft'>Every product, every flavor – every smile on every customer’s face –
                            starts with our dedicated, caring team. If creativity, integrity and teamwork inspire
                            you, we invite you to apply for an open position at our company.<br />
                            To have a promising career with TOP 'N TOWN, mail your resume at mourya.harsha@topntown.com
                            Click here to view current openings.
                        </p>

                    </div>

                    <div className='col-lg-6'>
                        <div className='Cfone'>
                            <h5 className='Ccc'>SEND US YOUR</h5><h3 className='Csups'><b>RESUME</b></h3>
                        </div>
                        <div style={{ paddingLeft: '50px', marginTop: '50px' }}>
                            <form>
                                <div className='form-row'>
                                    <div className='form-group'>
                                        <input type='text' placeholder='FIRST NAME' className='form-control' style={{ width: '220px', marginRight: '35px' }} />
                                    </div>
                                    <div className='form-group'>
                                        <input type='text' placeholder='LAST NAME' className='form-control' style={{ width: '220px' }} />
                                    </div>
                                    <div className='form-group'>
                                        <input type='email' placeholder='Enter email' className='form-control' style={{ width: '475px' }} />
                                    </div>
                                    <div className='form-group'>
                                        <input type='text' placeholder='Contact' className='form-control' style={{ width: '220px', marginRight: '35px' }} />
                                    </div>
                                    <div className='form-group'>
                                        <input type='text' placeholder='Date of Birth' className='form-control' style={{ width: '220px' }} />
                                    </div>
                                    <div className='form-group'>
                                        <input type='text' placeholder='Year Of Experience' className='form-control' style={{ width: '220px', marginRight: '35px' }} />
                                    </div>
                                    <div className='form-group'>
                                        <input type='text' placeholder='Applied For The Post' className='form-control' style={{ width: '220px' }} />
                                    </div>
                                    <div action="/action_page.php">
                                        <label for="myfile">Resume/CV</label>
                                        <input type="file" id="myfile" name="myfile" />
                                    </div>
                                    <div className='Cbut mb-3'>
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Career
