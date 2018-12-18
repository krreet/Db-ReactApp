import React from 'react'
import HeaderComponent from './HeaderComponent'
import ListComponent from './ListComponent'
import SubHeaderComponent from './SubHeaderComponent'
import ListDetailsComponent from './ListDetailsComponent'

const contacts = [
  { id: 1, name: "Leanne Graham" },
  { id: 2, name: "Ervin Howell" },
  { id: 3, name: "Clementine Bauch" },
  { id: 4, name: "Patricia Lebsack" }
];

export default class MainComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showMore : "none",
      DetailsShow : "none",
      dataNo:null
    }
  }

  showSomeData = () => {
     this.setState({showMore : "some"})
  }
  showMoreData = () => {
    this.setState({showMore : "more"})
  }

  showDetails = (data) => {
    this.setState({DetailsShow : "more" , dataNo: data});
    
  }
  render() {
    return (
      
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-6 col-xs-12">
         <HeaderComponent showSomeData = {this.showSomeData} showMoreData={this.showMoreData}/>&nbsp;&nbsp;
         <ListComponent data={contacts} showDetails= {this.showDetails} selectedId = {this.state.dataNo}/>
        </div>
        <div className="col-md-6 col-sm-6 col-xs-12">
          <SubHeaderComponent showMore={this.state.showMore} />&nbsp;&nbsp;
          <ListDetailsComponent DetailsShow={this.state.DetailsShow} dataNo={this.state.dataNo}/>
        </div>
      </div>
    </div>
    )
  }
}

//<SubHeaderComponent showMore={this.state.showMore} />