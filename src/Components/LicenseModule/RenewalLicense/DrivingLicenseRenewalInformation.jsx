import React from 'react';
import {Button,Container} from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import form from '../../Images/form.png';
import { useNavigate } from 'react-router-dom';

const DrivingLicenseRenewalInformation = () => {
  const navigate = useNavigate();
  const onButtonClick = () => {
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
  return ( 
    <>
    <h1 id='DLR'> Driving License Renewal</h1>
    <Container id="infocontainer" fluid style={{ width:"100%"}}>
       <Container id='infoL' style={{width:"70%"}}>
       <h2 id='stps'>Steps:</h2>
        <div id='steps' >
<p id='stps'>
 1. Book slot in your nearest traffic center.<br/>
 2. For booking, you can use RASTA App or you can call on 042-99030130 for appointments.<br/>
 3. If above steps doesn't apply then you can sipmly go to your nearest traffic center at 08 am.<br/>
 &nbsp;&nbsp;&nbsp; (for Test Centers Click_Here)<br/>
 4. Visit traffic center on given date and time<br/>
</p>
<h5 id='stps'>Note: Don't forget to carry documents which are mentioned below.</h5>   
  </div>
  <h2 id='stps'>Required Documents:</h2>
  <div id='docs'>
  <p id='stps'>
 1. A copy of Orignal ID Card.<br/>
 2. 2 passport size (45mm x 35mm) photographs with blue background.<br/>
 3. Orignal Driving License <br/>
 4. Form E (Click the Button below to downlaod). <br/>
 5. Post office Tickes as given below.
</p>
</div>
<Table bordered size='sm' style={{marginRight:"30px", width:"90%", border:"solid 2px"}}>
  <thead>
    <tr>
      <th width="20%" >Vehical Type</th>
      <th >Renewal Ticket</th>
      <th >Fine 1-3 months</th>
      <th >Fine 3-12 months</th>
      <th >Fine 1 year</th>
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <td>Bike</td>
      <td>500 Rupees</td>
      <td>50 Rupees</td>
      <td>100 Rupees</td>
      <td>250 Rupees</td>
    </tr>
    <tr>
    <td>Bike , Car , LTV</td>
      <td>750 Rupees</td>
      <td>75 Rupees</td>
      <td>150 Rupees</td>
      <td>375 Rupees</td>
    </tr>
    <tr>
    <td>PSV + HTV</td>
      <td>1000 Rupees</td>
      <td>100 Rupees</td>
      <td>200 Rupees</td>
      <td>500 Rupees</td>
    </tr>
  </tbody>
</Table>
<Button  variant='default' id='form' onClick={onButtonClick}> <img  id='formpic' className="img-responsive" src={form}  alt="logo" />
                   Form 
                </Button>
       </Container>
       <Container id='infoR'style={{width:"30%"}}>
        <h2>
          Related Searches
        </h2>
        <br/><h6 id='rS' onClick={() => navigate('/InternationDrivingLicense') } style={{cursor:'pointer'}}>International Driving License</h6> <br/>
        <h6 id='rS' onClick={() => navigate('/DuplicateDrivingLicense') } style={{cursor:'pointer'}}>Duplicate Driving License </h6><br/>
        <h6 id='rS' onClick={() => navigate('/Sign') } style={{cursor:'pointer'}}>Signs</h6><br/>
        <h3 >
          Frequently Asked Questions 
        </h3>
        <br/><h6 id='rS' style={{cursor:'pointer'}}>How can I locate my test center? </h6><br/>
        <h6 id='rS' onClick={() => navigate('/about') } style={{cursor:'pointer'}}>How can I contact you? </h6>
        <br/><h6><a  href="https://dlims.punjab.gov.pk/track/" target="_blank"> How can I check my license status? </a></h6>
       </Container>
    </Container>
    </>
   );
}
 
export default DrivingLicenseRenewalInformation;
