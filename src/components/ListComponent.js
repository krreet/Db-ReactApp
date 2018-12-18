import React from 'react';


export default class ListComponent extends React.Component {
  constructor(props){
    super(props);
  }
  showDetails = (id) => {
    //console.log(e.target, e.target.getAttribute('data-key'),"EVENT");
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
      <li className={"rounded list-group-item " + (this.props.item.id == this.props.selectedId ?  'active' :  '' )} style={{padding:'10px', border:'1px solid #CECECE'}} key={this.props.item.id} onClick={this.handleClick}>{this.props.item.name}<i className="_icon pull-right fa fa-chevron-circle-right"></i></li>
    )
  }
}
