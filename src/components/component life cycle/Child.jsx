import React from 'react';

export class Child extends React.Component {
  constructor() {
    super();
    this.state = {
      age: 0,
      name: '',
    };
  }

  componentDidMount() {
    console.log('hi');
    console.log('render');
  }

  componentDidUpdate(prevProp, prevState) {
    console.log('render');
    if (
      prevState.name !== this.state.name ||
      prevState.age !== this.state.age
    ) {
      console.log(this.state.name, this.state.age);
    }
    if (prevState.name !== this.state.name) {
      document.title = this.state.name;

      if (this.nameTimeOut !== null) clearInterval(this.nameTimeOut);

      this.nameTimeOut = setTimeout(() => {
        console.log(`My name is ${this.state.name}`);
      }, 1000);
    }
  }

  componentWillUnmount() {
    console.log('unmont bye');

    if (this.nameTimeOut !== null) clearInterval(this.nameTimeOut);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <br />
        <br />
        <button
          onClick={() =>
            this.setState((state) => {
              return { age: state.age - 1 };
            })
          }
        >
          -
        </button>
        {this.state.age}
        <button
          onClick={() =>
            this.setState((state) => {
              return { age: state.age + 1 };
            })
          }
        >
          +
        </button>
        <br />
        <br />
        My name is {this.state.name} and I am {this.state.age} years old.
      </div>
    );
  }
}
