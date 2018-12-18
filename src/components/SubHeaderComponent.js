import React from 'react';

function SubHeaderComponent(props){
  var disp = null;
  if(props.showMore === "some") {
  disp  = (<div className="alert alert-dark">
                <button className="btn btn-success">7Day</button>&nbsp;&nbsp;&nbsp;
                <button className="btn btn-secondary">1Month</button>&nbsp;&nbsp;&nbsp;
                <button className="btn btn-danger">Custom</button>&nbsp;&nbsp;&nbsp;
              </div>)
    }else if(props.showMore === "more"){
  disp =  (<div className="alert alert-dark"> 
                <button className="btn btn-warning">7Day</button>&nbsp;&nbsp;
                <button className="btn btn-info">1Month</button>&nbsp;&nbsp;
                <button className="btn btn-success">6Month</button>&nbsp;&nbsp;
                <button className="btn btn-primary">Custom</button>&nbsp;&nbsp;
              </div>)
    }
  else{
  disp = <div></div>
  }
  return(
    <div className="top_margin">
      {disp}
    </div>
        
  )
}

export default SubHeaderComponent