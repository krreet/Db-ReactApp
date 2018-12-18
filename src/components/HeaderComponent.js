import React from 'react';
//import SubHeaderComponent from './SubHeaderComponent'


export default class HeaderComponent extends React.Component {
  constructor(props){
    super(props);
    this.state={addClass:false,addnewClass: false}
  }
  showSomeData = () => {
    this.setState({addClass:true,addnewClass:false})
    this.props.showSomeData();
    this.setState({showMore : "some"})
  }
  showMoreData = () => {
    this.setState({addClass:false,addnewClass:true})
    this.props.showMoreData();
    this.setState({showMore : "more"})
  }

  render() {
    return (
      <div>
         <div className="alert alert-dark top_margin">
            <ul className="nav nav-pills">
              <li className="nav-item col-sm-6 col-md-6" onClick= {() => this.showSomeData()}>
                <a className={"nav-link" + (this.state.addClass ? ' active':'')} href="#">DB Bank</a>
              </li>
              <li className="nav-item col-sm-6 col-md-6" onClick={() => this.showMoreData()}>
                <a className={"nav-link" + (this.state.addnewClass ? ' active':'')}  href="#">HF Bank</a>
              </li>
            </ul> 
   {/*<ul className="nav nav-tabs">
    <li className="active">DB Bank<a data-toggle="tab" onClick= {() => this.showSomeData()}>DB Bank</a></li>&nbsp;
    <li><a data-toggle="tab" href="#menu1" onClick= {() => this.showMoreData()}>HF Bank</a></li>
  </ul>&nbsp;

  <div className="tab-content">
    <div id="home" className="tab-pane fade in active">
       
      <SubHeaderComponent showMore={this.state.showMore}/>
    </div>
    <div id="menu1" className="tab-pane fade">
      <SubHeaderComponent showMore={this.state.showMore}/>
    </div>
  </div>*/}

           {/* <Tabs
      activeTab={{
        id: "tab1"
      }}
    >
      {(activeTab, addTab) => (
        <div>
          <Tabs.Tab
            activeTab={activeTab}
            addTab={addTab}
            id="tab1"
            title="Tab 1"
          >
            <glamorous.Div padding={20}>
              <a href="#">This is tab 1</a>
            </glamorous.Div>
          </Tabs.Tab>
          <Tabs.Tab
            activeTab={activeTab}
            addTab={addTab}
            id="tab2"
            title="Tab 2"
          >
            <glamorous.Div padding={20}>
              <a href="#">This is tab 2</a>
            </glamorous.Div>
          </Tabs.Tab>
        </div>
      )}
    </Tabs>*/}
         </div>
      </div>  
     
    )
  }
}

//<glamorous.Div padding={20}>This is tab 2</glamorous.Div>
//<glamorous.Div padding={20}>This is tab 1</glamorous.Div>
// <Tabs
//   activeTab={{
//     id: "tab1"
//   }}>
//    <React.Fragment>
//       <Tabs.Tab id="tab1" title="Tab 1">
         
//       </Tabs.Tab>
//       <Tabs.Tab id="tab2" title="Tab 2" onClick={() => this.showMoreData()}>
         
//       </Tabs.Tab>
//    </React.Fragment>
// </Tabs>
// <button className="btn btn-info" onClick= {() => this.showSomeData()}>DB Bank</button>&nbsp;&nbsp;&nbsp;
//             <button className="btn btn-info" onClick={() => this.showMoreData()}>HF Bank</button>