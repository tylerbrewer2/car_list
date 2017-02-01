import React from 'react';

export default class Header extends React.Component {
  static propTypes = {
    headerText: React.PropTypes.string,
  }

  render() {
    return <h1>{this.props.headerText}</h1>;
  }
}