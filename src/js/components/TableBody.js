import React from 'react';
import CarRow from './CarRow';

export default class TableBody extends React.Component {
  static propTypes = {
    headers: React.PropTypes.arrayOf(React.PropTypes.string),
    deleteCar: React.PropTypes.func,
    updateCar: React.PropTypes.func,
    myCars: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number,
      make: React.PropTypes.string,
      model: React.PropTypes.string,
      year: React.PropTypes.string,
      color: React.PropTypes.string,
      price: React.PropTypes.string,
    })),
  }

  render() {
    return (
      <tbody>
        {this.props.myCars.map((car)=> {
          return (
            <CarRow 
              headers={this.props.headers} 
              car={car} 
              deleteCar={this.props.deleteCar}
              updateCar={this.props.updateCar}
            />
          );
        })}
      </tbody>
    );
  }
}