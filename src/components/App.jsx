import { Component } from 'react';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  handleIncrement = evt => {
    let key = evt.target.textContent;

    this.setState(state => ({
      [key]: state[key] + 1,
    }));

    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(({ good, neutral, bad }) => ({
      total: good + neutral + bad,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(({ good, total }) => ({
      positiveFeedback: Math.round((good / total) * 100),
    }));
  };

  render() {
    const { good, neutral, bad, total, positiveFeedback } = this.state;
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button type="button" onClick={this.handleIncrement}>
          good
        </button>
        <button type="button" onClick={this.handleIncrement}>
          neutral
        </button>
        <button type="button" onClick={this.handleIncrement}>
          bad
        </button>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positiveFeedback}%</li>
        </ul>
      </div>
    );
  }
}

export default App;
