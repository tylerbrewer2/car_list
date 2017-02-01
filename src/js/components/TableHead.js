import React from 'react';

export default class TableHead extends React.Component {
  static propTypes = {
    headers: React.PropTypes.arrayOf(React.PropTypes.string),
    capitalize: React.PropTypes.func,
  }

  render() {
    return (
      <thead>
        <tr>
          {this.props.headers.map(header => 
            <th>{this.props.capitalize(header)}</th>
          )}
        </tr>
      </thead>
    );
  }
}