import React from 'react';
import { Link } from "react-router-dom";
import PDFContainer from './PdfContainer'

class MoreDetailsComponent extends React.Component {
  constructor(props){
    super(props);
    this.state={
      show:false
    }
  }
  showPdf= ()=>{
    this.setState({show : true})
  }
  render(){
    return(
      <div>
        <button className="btn btn-default top_left_margin"><Link to="/">Back</Link></button> 
        <div className="col-md-12 col-sm-12 top_margin">
        
        <div className="rounded list col-md-12 col-sm-12">
          <p><strong>Click on the submit button to view the details of the employee selected. If you have any issue please send us an email.</strong></p>
        </div>
          <button className="btn btn-info top_margin pull-right" onClick={this.showPdf}>Submit</button>
          
        </div>
        {this.state.show  ?  <PDFContainer /> : null }
      </div>   
     
    )
  }
}



export default MoreDetailsComponent;