import React from "react";

class Tab extends React.Component {
  componentDidMount() {
    this.props.addTab({
      id: this.props.id,
      title: this.props.title,
      tabIndex: this.props.tabIndex
    });
  }

  render() {
    return this.props.activeTab.id === this.props.id && this.props.children;
  }
}

export default Tab;
