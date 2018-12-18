import React from 'react';


export default class ListComponent extends React.Component {

  showDetails = (id) => {
    this.props.showDetails(id);
  }
  render() { 
    const listItems = this.props.data.map((item) =>{
      return(
        <SubList onSubClick={this.showDetails} selectedId = {this.props.selectedId} item={item} key={item.id}/> 
      )
    } );
    return (
      <div>
      <span><b>Category</b></span>
      <ol className="removeClass">{listItems}</ol>
      </div>
    );
  }
}

class SubList extends React.Component {
  handleClick = () =>{
    this.props.onSubClick(this.props.item.id)
  }
  render(){
    return(
      <li className={"rounded list-group-item list " + (this.props.item.id === this.props.selectedId ?  'active' :  '' )} key={this.props.item.id} onClick={this.handleClick}>{this.props.item.name}<i className="_icon pull-right fa fa-chevron-circle-right"></i></li>
    )
  }
}
