import React from 'react';
import './CSS/Banner.css';
import 'antd/dist/antd.css';
import './index.css';
import { Button } from 'antd';
import {Link} from 'react-scroll'

function Banner() {

    return(
        <div className='container'>
            <img src='https://s3.amazonaws.com/unroll-images-production/projects%2F9735%2F1626355158971-cody-black-VDb0wxbfG6k-unsplash.jpg' style={{width:'100%'}}/>
            <div className="banner_contents">
                <h1 className="banner_title">
                    Shipping For You
                </h1>
                <div>
                    <Button type="primary" shape="round" size="large" className="banner_buttons" style={{ background: "#c85366", border: "none", height: '50px', width: 'auto'}}>
                        <Link activeClass="active" to="form" spy={true} smooth={true}>Start Shipping</Link>
                    </Button>
                </div>
            </div>
        </div>
        
    )
}
export default Banner