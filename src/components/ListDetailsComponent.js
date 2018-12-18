import React from 'react';

const DataArray = [
  {category:1,
  empId:157,
  data : "Lorem Ipsum ",
  age:28,
  address:"Pune"
  },
  {category:2,
  empId:158,
  data : "Lorem Ipsum2 ",
  age:29, address:"Pune"},
  {category:3,
  empId:159,
  data : "Lorem Ipsum3 ",
  age:32,  address:"Pune"},
  {category:4,
  empId:159,
  data : "Lorem Ipsum4 ",
  age:34, address:"Pune"}
]

const ListDetailsComponent = ({DetailsShow, dataNo}) => {
  const detailsData = null;
  if(DetailsShow == "more"){
        return(
            detailsData = <div><span><b>Reports</b></span> 
            <div className="rounded list">
               {DataArray[dataNo - 1].data}
               <table>
                <th><td>EMP Id</td></th>
                <th><td>EMP Name</td></th>
                <th><td>EMP Age</td></th>
                <th><td>EMP Adress</td></th>
               </table>
            </div></div>
      )
  }else{
    detailsData =  <div></div>
  }
  return (
     <div>
        {detailsData}
    </div>
  )
}
export default ListDetailsComponent;