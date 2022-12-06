import React from 'react';
import {Container} from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import { useNavigate } from 'react-router-dom';
const LearnerPermitInformation = () => {
  const navigate = useNavigate();
  return ( 
    <>
    <h1 id='LP'> Learner Permit</h1>
    <Container id="infocontainer" fluid style={{ width:"100%"}}>
       <Container fluid id='infoL' style={{width:"70%"}}>
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
 1. 2 copies of Orignal ID Card.<br/>
 2. Post office Tickes as given below.<br/>
</p>
<Table bordered size='sm' style={{marginRight:"30px", width:"90%", border:"solid 2px"}}>
  <thead>
    <tr>
      <th width="20%">Vehical Type</th>
      <th >Age</th>
      <th >Ticket Price</th>
      <th >Validity Year</th>
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <td>Bike</td>
      <td>18 years</td>
      <td>60 Rupees</td>
      <td>2022</td>
    </tr>
    <tr>
      <td>Car</td>
      <td>18 years</td>
      <td>60 Rupees</td>
      <td>2022</td>
    </tr>
    <tr>
      <td>LTV</td>
      <td>21 years</td>
      <td>60 Rupees</td>
      <td>2022</td>
 
    </tr>
    <tr>
      <td>HTV</td>
      <td>22 years</td>
      <td>60 Rupees</td>
      <td>2022</td>
 
    </tr> 
  </tbody>
</Table>
  </div>
    
    
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
        <br/><h6 id='rS' style={{cursor:'pointer'}}>How can I find my test center? </h6><br/>
        <h6 id='rS' onClick={() => navigate('/about') } style={{cursor:'pointer'}}>How can I contact you? </h6>
        <br/><h6><a  href="https://dlims.punjab.gov.pk/track/" target="_blank"> How can I check my license status? </a></h6>
        

       </Container>
    </Container>
    </>
   );
}
 
export default LearnerPermitInformation;
