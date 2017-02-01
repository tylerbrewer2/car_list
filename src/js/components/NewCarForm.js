import React from 'react';

export default class NewCarForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newCarMake: '',
      newCarModel: '',
      newCarYear: '',
      newCarColor: '',
      newCarPrice: '',
    };
  }

  handleChange = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value });
  }

  addCar = () => {
    const newCar = {
      make: this.state.newCarMake,
      model: this.state.newCarModel,
      year: this.state.newCarYear,
      color: this.state.newCarColor,
      price: this.state.newCarPrice,
    };

    this.setState({
      newCarMake: '',
      newCarModel: '',
      newCarYear: '',
      newCarColor: '',
      newCarPrice: '',
    });

    this.props.onClick(newCar);
  }

  static propTypes = {
    headers: React.PropTypes.arrayOf(React.PropTypes.string),
    capitalize: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onClick: React.PropTypes.func,
  }

  render() {
    return (
      <form>
          {this.props.headers.map(header =>
            <div>
              <label htmlFor={ `newCar${this.props.capitalize(header)}` }>{ this.props.capitalize(header) }</label>
              <input 
                id={`new-car-${header}`}
                name={`newCar${this.props.capitalize(header)}`}
                value={this.state[`newCar${this.props.capitalize(header)}`]} 
                onChange={this.handleChange}
              />
            </div>
          )}
          <button 
            type='button' 
            onClick={this.addCar}>Add Car
          </button>
      </form>
    );
  }
}