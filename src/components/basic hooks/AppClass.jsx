import React from 'react';

export default class AppClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  render() {
    return (
      <>
        name:
        <input
          ref={inputRef}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
      </>
    );
  }
}
