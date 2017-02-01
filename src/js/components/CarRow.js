import React from 'react';
import ViewCarRow from './ViewCarRow';
import EditCarRow from './EditCarRow';

export default class CarRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
    };
  }

  static propTypes = {
    headers: React.PropTypes.arrayOf(React.PropTypes.string),
    deleteCar: React.PropTypes.func,
    updateCar: React.PropTypes.func,
    car: React.PropTypes.shape({
      id: React.PropTypes.number,
      make: React.PropTypes.string,
      model: React.PropTypes.string,
      year: React.PropTypes.string,
      color: React.PropTypes.string,
      price: React.PropTypes.string,
    }),
  }

  updateEdit = (editable) => {
    this.setState({editable});
  }

  renderComponent = () => {
    if (this.state.editable) {
      return (
        <EditCarRow
          headers={this.props.headers} 
          car={this.props.car} 
          deleteCar={this.props.deleteCar}
          updateEdit={this.updateEdit}
          updateCar={this.props.updateCar}
        />
      );
    } else {
      return (
        <ViewCarRow
          headers={this.props.headers} 
          car={this.props.car} 
          deleteCar={this.props.deleteCar}
          updateEdit={this.updateEdit}
        />
      );
    }
  }
  render() {
    return this.renderComponent();
  }
}