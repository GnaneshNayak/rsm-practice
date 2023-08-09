import React from 'react';

export default class AppClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: 0,
    };
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentDidUpdate(prevProp, prevState) {
    if (prevState.name !== this.state.name) {
      console.log('name changed');
    }
  }
  componentWillUnmount() {
    console.log('unMount');
  }
  render() {
    const handleChange = (e) => {
      this.setState({ name: e.target.value });
    };
    const increment = (e) => {
      this.setState({ age: this.state.age + 1 });
    };
    const decrement = (e) => {
      this.setState({ age: this.state.age - 1 });
    };

    return (
      <div>
        <input type="text" onChange={handleChange} />
        <button onClick={increment}>+</button>
        <span>{this.state.age}</span>
        <button onClick={decrement}>-</button>
        <h1>
          hello my name is {this.state.name} and my age is {this.state.age}
        </h1>
        ;
      </div>
    );
  }
}
