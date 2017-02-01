import React from 'react';

// Components
import Header from 'components/header';
import TableBody from 'components/TableBody';
import TableHead from 'components/TableHead';
import Table from 'components/Table';
import NewCarForm from 'components/NewCarForm';

export default class CarTool extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // creates a new object in memory
      myCars: this.props.myCars.concat(),
    };
  }

  static propTypes = {
    headers: React.PropTypes.arrayOf(React.PropTypes.string),
    myCars: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number,
      make: React.PropTypes.string,
      model: React.PropTypes.string,
      year: React.PropTypes.string,
      color: React.PropTypes.string,
      price: React.PropTypes.string,
    })),
  }

  capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  onClick = (newCar) => {
    this.setState({ 
      myCars: this.state.myCars.concat(newCar),
    });
  }

  deleteCar = (carId) => {
    const myCars = this.state.myCars.concat();
    const car = myCars.find((car) => car.id === carId);
    const index = myCars.indexOf(car);
    myCars.splice(index, 1);
    this.setState({myCars});
  }

  updateCar = (newCar) => {
    const myCars = this.state.myCars.concat();
    const car = myCars.find((car) => car.id === newCar.id);
    const index = myCars.indexOf(car);
    myCars[index] = newCar;
    this.setState({myCars});
  }

  render() {
    return (
      <div>
        <Header headerText="Tyler's Limited Knowledge Car Shop" />
        <NewCarForm 
          onChange={this.onChange}
          headers={this.props.headers}
          capitalize={this.capitalize}
          onClick={this.onClick} 
        />
        <Table>
          <TableHead 
            headers={this.props.headers} 
            capitalize={this.capitalize} 
          />
          <TableBody 
            myCars={this.state.myCars} 
            headers={this.props.headers} 
            deleteCar={this.deleteCar}
            updateCar={this.updateCar}
          />
        </Table>
      </div>
    );
  }
}