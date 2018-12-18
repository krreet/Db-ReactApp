import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function MoreDetailsComponent(props){
  return(
    <div>
    <button className="btn btn-default top_left_margin"><Link to="/">Back</Link></button> 
    <div className="col-md-12 col-sm-12 top_margin">
    
    <div className="rounded list col-md-12 col-sm-12">
      <p><strong>Click on the submit button to view the details of the employee selected. If you have any issue please send us an email.</strong></p>
    </div>
      <button className="btn btn-info top_margin pull-right">Submit</button>
      
    </div>
    </div>    
  )
}

export default MoreDetailsComponent;