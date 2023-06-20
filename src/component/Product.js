import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom';
import  Footer  from '../component/Footer';

const Product = () => {
    return (
        <div>
            <div className='img' style={{marginTop:"-23px"}}>
        <h1 className='pt-5 f2'><b>ALL PRODUCTS</b></h1>
        <h6 className='text'><Link style={{ color: "white", textDecoration: "none" }} to='/'><b>Home</b></Link></h6>
        <div>
        <div className='vl tcs'></div>
        </div>
        <h6 className='texts'><b>Product</b></h6>
      </div>
            <div className='container'>
                
                <div className='row'>
                    <div className='col-lg-4 card hovf'>
                        <img style={{ width: '100%' }} src={require("../Images/magic-cone.jpg")} alt='' />
                    </div>
                    
                    <div className='col-lg-4 card hovf '>
                        <img style={{ width: '100%' }} src={require("../Images/bliss-cone.jpg")} alt='' />
                    </div>
                    <div className='col-lg-4 card hovf '>
                        <img style={{ width: '100%' }} src={require("../Images/ice-cream-cake.jpg")} alt='' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-4 card hovf '>
                        <img style={{ width: '100%' }} src={require("../Images/take-home-tub.jpg")} alt='' />
                    </div>
                    <div className='col-lg-4 card hovf '>
                        <img style={{ width: '100%' }} src={require("../Images/smart-pack.jpg")} alt='' />
                    </div>
                    <div className='col-lg-4 card hovf '>
                        <img style={{ width: '100%' }} src={require("../Images/combo-pack.jpg")} alt='' />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-lg-4 card hovf '>
                        <img style={{ width: '100%' }} src={require("../Images/chocolate-bars.jpg")} alt='' />
                    </div>
                    <div className='col-lg-4 card hovf '>
                        <img style={{ width: '100%' }} src={require("../Images/ice-candies.jpg")} alt='' />
                    </div>
                    <div className='col-lg-4 card hovf '>
                        <img style={{ width: '100%' }} src={require("../Images/dollies.jpg")} alt='' />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-lg-4 card hovf '>
                        <img style={{ width: '100%' }} src={require("../Images/novelties.jpg")} alt='' />
                    </div>
                    <div className='col-lg-4 card hovf '>
                        <img style={{ width: '100%' }} src={require("../Images/kids.jpg")} alt='' />
                    </div>
                    <div className='col-lg-4 card hovf '>
                        <img style={{ width: '100%' }} src={require("../Images/sandwich.jpg")} alt='' />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-lg-4 card hovf '>
                    <img style={{ width: '100%' }} src={require("../Images/kulfi.jpg")} alt='' />
                    </div>
                    <div className='col-lg-4 card hovf '>
                    <img style={{ width: '100%' }} src={require("../Images/100ml-cup.jpg")} alt='' />
                    </div>
                    <div className='col-lg-4 card hovf '>
                    <img style={{ width: '100%' }} src={require("../Images/naturals.jpg")} alt='' />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-lg-4 card hovf '>
                    <img style={{ width: '100%' }} src={require("../Images/no-sugar.jpg")} alt='' />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Product
