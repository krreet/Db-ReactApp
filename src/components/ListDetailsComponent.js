import React from 'react';
import { Link } from "react-router-dom";
import JsonData from '../data/data';

const ListDetailsComponent = ({DetailsShow, dataNo}) => {
  let detailsData = null;
  if(DetailsShow === "more"){
        return(
            detailsData = 
              <div>
              <span><b>Reports</b></span> 
                <div className="rounded list">
                <TableRow data={JsonData.DataArray}/>
            </div>
            </div>
      )
  }else{
  detailsData = <div></div>
  }
  return (
     <div>
        {detailsData}
    </div>
  )
}
export default ListDetailsComponent;

class TableRow extends React.Component {
  render() {
    const {
      data
    } = this.props;
    const row = data.map((data, key) =>
    <tr key={key}>
      {<Link to="/MoreDetailsComponent"><td key={data.empId}>{data.empId}</td></Link>}
      <td key={data.data}>{data.data}</td>
      <td key={data.age}>{data.age}</td>
      <td key={data.address}>{data.address}</td>
    </tr>
    )
    return (
      <table className="table table-hover">
                <thead>
                  <tr>
                    <th>EmpId</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  {row}
                </tbody>
      </table>
    );
  }
}