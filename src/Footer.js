import React from 'react';
import 'antd/dist/antd.css';
import './CSS/Footer.css';

function Footer() {

    return(
        <div className='footer' id='footer'>
            <img src="https://s3.amazonaws.com/unroll-images-production/projects%2F9735%2F1626268786448-image.PNG" style={{maxHeight: '100%', maxWidth: '100%'}}/>
            
            <div className="footer-content">
                <h3 style={{float: 'left'}}>
                    Follow Us @
                    {'\n'}
                    <img src="https://s3.amazonaws.com/unroll-images-production/projects%2F9735%2F1626269617623-instagram.png" style={{width:'35px'}}/>
                    {'\n'}
                    <img src="https://s3.amazonaws.com/unroll-images-production/projects%2F9735%2F1626269662362-facebook.png" style={{width:'35px'}}/>
                    {'\n'}
                    <img src="https://s3.amazonaws.com/unroll-images-production/projects%2F9735%2F1626269676679-whatsapp.png" style={{width:'35px'}}/>
                </h3>
                <h3 style={{float: 'right', paddingBottom: '20px'}}>
                    @ShippingCompany
                </h3>
            </div>
        </div>
        
    )
}
export default Footer