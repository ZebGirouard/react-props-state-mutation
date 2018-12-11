import React, { Component } from 'react';

class TestComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      farewell: 'Bye there!',
      user: {
        name: 'Zeb',
        age: 84,
        skills: [ 'Tether ball', 'Loving puppies', 'Asthma' ],
      }
    }
  }

  handleClick = () => {
    // this.state.farewell = 'Zai jian!'

    // this.setState({
    //   user: {
    //     name: 'Holly',
    //   }
    // })

    // Challenge --
    // Add a new skill to Zeb's array above
    // Using the spread (...) operator
    // Hint: you may need to use it more than once
  }

  render() {
    // this.props.greeting = 'Hola amigos!'

    // this.state.farewell = 'Adios amigos!'
    return (
      <div>
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <p>{ this.props.greeting }</p>
        <p>My name is { this.state.user.name }, and I am { this.state.user.age }.</p>
        <p>{ this.state.farewell }</p>
        <button onClick={ this.handleClick }>Mandarin Yo</button>
      </div>
    );
  }
}

export default TestComponent;
