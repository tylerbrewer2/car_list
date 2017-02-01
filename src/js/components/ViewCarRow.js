import React from 'react';

export default class ViewCarRow extends React.Component {
  static propTypes = {
    headers: React.PropTypes.arrayOf(React.PropTypes.string),
    deleteCar: React.PropTypes.func,
    updateEdit: React.PropTypes.func,
    car: React.PropTypes.shape({
      id: React.PropTypes.number,
      make: React.PropTypes.string,
      model: React.PropTypes.string,
      year: React.PropTypes.string,
      color: React.PropTypes.string,
      price: React.PropTypes.string,
    }),
  }

  render() {
    return (
      <tr>
        {this.props.headers.map(header => 
          <td>{this.props.car[header]}</td>
        )}

        <td><button onClick={() => this.props.deleteCar(this.props.car.id)}>Delete</button></td>
        <td><button onClick={() => this.props.updateEdit(true)}>Edit</button></td>
      </tr>
    );
  }
}