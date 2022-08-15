import { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = evt => {
    let key = evt.target.textContent;

    this.setState(state => ({
      [key]: state[key] + 1,
    }));
  };

  countTotalFeedback = state => {
    return Object.values(state).reduce(
      (total, element) => (total += element),
      0
    );
  };

  countPositiveFeedbackPercentage = (good, total) => {
    const positive = Math.round((good / total) * 100);
    return isNaN(positive) ? 0 : positive;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(this.state);
    const positivePercentage = this.countPositiveFeedbackPercentage(
      good,
      total
    );
    const btnNames = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={btnNames}
            onLeaveFeedback={this.handleIncrement}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {total === 0 ? <Notification message="There is no feedback"></Notification> :
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            ></Statistics>}
        </Section>
      </>
    );
  }
}

export default App;
