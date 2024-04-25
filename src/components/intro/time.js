import React, { Component } from 'react';

class RealTimeClock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: new Date()
    };
  }

  componentDidMount() {
    // Update the time every second
    this.intervalId = setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted
    clearInterval(this.intervalId);
  }

  render() {
    const { currentTime } = this.state;

    return (
      <div>
        <h1>Real Time Clock</h1>
        <p>Current Time: {currentTime.toLocaleTimeString()}</p>
        <p>Current Date: {currentTime.toDateString()}</p>
      </div>
    );
  }
}

export default RealTimeClock;
