import React from 'react';
import {Container} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import twitter from '../Images/twitter.png'
import instagram from '../Images/instagram.png'
import facebook from '../Images/facebook.png'
import NewLogo from '../Images/NewLogo.png';

const Footer = () => {

    const navigate = useNavigate();
    const onRegularClick = () => {
        fetch('Regular Driving License Form.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Regular Driving License Form.pdf';
                alink.click();
            })
        })
    }
    const onInternationalClick = () => {
        fetch('International License Form.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'International License Form.pdf';
                alink.click();
            })
        })
    }
    const onRenewalClick = () => {
        fetch('Driving License Renewal Form.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Driving License Renewal Form.pdf';
                alink.click();
            })
        })
    }
    const onDuplicateClick = () => {
        fetch('Duplicate Driving License Form.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Duplicate Driving License Form.pdf';
                alink.click();
            })
        })
    }

    return ( 
        <Container fluid className='footer' id='footer'>
            <div id='footermaindiv'>
            <img width="70px"
        height="70px"
        style={{ float: "left", marginTop: "40px", marginLeft:"20px" }}
        className="img-responsive"
        src={NewLogo}
        onClick={() => navigate('/')}
        alt="logo" />
                <h3 id='footerhead'> PakRoad Information Portal</h3> <br/>
<h5 id='footerdata'>"To enhance the quality of life and well being of all people in the capital 
    city Punjab by contributing to making our place safer and secure, without 
    the fear of crime and violence."</h5>
            </div>

            <div style={{ height:"250px", marginTop:"10px", float:"left",width:"25%"}}>
<h2 style={{textAlign:"center",color:"white", marginTop:"3px"}}>About</h2>

            </div>

            <div style={{ height:"250px", marginTop:"10px", float:"left",width:"25%"}}>
<h2 style={{textAlign:"center",color:"white", marginTop:"3px"}}>Downloads</h2><br/>
<h6 id='dforms'onClick={onRegularClick}>Regular Driving License Form</h6><br/>
<h6 id='dforms'onClick={onInternationalClick}>International Driving License Form</h6><br/>
<h6 id='dforms'onClick={onRenewalClick}>Driving License Renewal Form</h6><br/>
<h6 id='dforms'onClick={onDuplicateClick}>Duplicate Driving License Form</h6>

            </div>


<div fluid style={{backgroundColor:"#00000", float:"left", width:"100%"}}>
       <p id='cp'>Copyright &copy; 2022 All Rights Reserved. PakRoad Traffic Rules, Training & Information Portal </p>
       <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
        <img  id='images' className="img-responsive" src={twitter}  alt="logo" />
        </a>  
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
        <img  id='images' className="img-responsive" src={instagram}  alt="logo" />
        </a>   
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
        <img  id='images' className="img-responsive" src={facebook}  alt="logo" />
        </a>  
        </div>

    </Container>
     );
}
 
export default Footer;
