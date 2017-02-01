import React from 'react';

export default class EditRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.car.id,
      make: this.props.car.make,
      model: this.props.car.model,
      year: this.props.car.year,
      color: this.props.car.color,
      price: this.props.car.price,
    };
  }  

  static propTypes = {
    headers: React.PropTypes.arrayOf(React.PropTypes.string),
    deleteCar: React.PropTypes.func,
    updateEdit: React.PropTypes.func,
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
  
  addCar = () => {
    const newCar = {
      id: this.state.id,
      make: this.state.make,
      model: this.state.model,
      year: this.state.year,
      color: this.state.color,
      price: this.state.price,
    };

    this.setState({
      make: '',
      model: '',
      year: '',
      color: '',
      price: '',
    });

    this.props.updateCar(newCar);
    this.props.updateEdit(false);
  }

  handleChange = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value });
  }

  render() {
    return (
      <tr>
        {this.props.headers.map(header => 
          <td>
            <input 
              id={`car-${header}`}
              name={header}
              value={this.state[header]} 
              onChange={this.handleChange}
            />
          </td>
        )}

        <td><button onClick={this.addCar}>Save</button></td>
        <td><button onClick={() => this.props.updateEdit(false)}>Cancel</button></td>
      </tr>
    );
  }
}