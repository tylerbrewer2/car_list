import React from 'react';

export default class Table extends React.Component {
  static propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node,
    ]),
  }

  render() {
    return(
      <table>
        {this.props.children} 
      </table>
    );
  }
}