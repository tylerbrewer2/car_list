import React from 'react';
import ReactDOM from 'react-dom';

const colors = ['green', 'yellow', 'black', 'red', 'white', 'blue'];

class ColorHeader extends React.Component {
  render() {
    return <h1>Color List</h1>;
  }
}

class ColorList extends React.Component {

  static propTypes = {
      myColors: React.PropTypes.array
  }

  render() {
    return (
      <ul>
        {this.props.myColors.map(myColor => 
            <li>{myColor}</li>
        )}
      </ul>
    );
  }
}

class ColorTool extends React.Component {
  constructor(props) {
    super(props);
    // binds this to the specific instance of ColorList
    // sets the context of this to the instance of ColorList
    this.onChange = this.onChange.bind(this);

    this.state = {
      newColor: '',
    };
  }

  onChange(e) {
    this.setState({[e.currentTarget.name]: e.currentTarget.value});
  }

  render() {
    // JSX gets rendered into a function call
    // props is a frozen object
    
    // using const since we will not be changing what listItems points to, only the array itself
    return (
      <div>
        <ColorHeader />
        <ColorList myColors={this.props.myColors}/>
        <form>
          <div>
            <label htmlFor='new-color-input'>New Color</label>
            <input type='text' 
                   id='new-color-input' 
                   name='newColor' 
                   value={this.state.newColor} onChange={this.onChange} />
          </div>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<ColorTool myColors={colors} />, document.querySelector('main'));

