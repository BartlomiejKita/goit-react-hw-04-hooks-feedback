import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import { useReducer } from 'react';

const initialValue = {
  good: 0,
  bad: 0,
  neutral: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'good':
      return { ...state, good: state.good + 1 };
    case 'bad':
      return { ...state, bad: state.bad + 1 };
    case 'neutral':
      return { ...state, neutral: state.neutral + 1 };
    default:
      throw new Error();
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const handleIncrement = evt => dispatch({ type: evt.target.textContent });

  const countTotalFeedback = state => {
    return Object.values(state).reduce(
      (total, element) => (total += element),
      0
    );
  };

  const countPositiveFeedbackPercentage = (good, total) => {
    const positive = Math.round((good / total) * 100);
    return isNaN(positive) ? 0 : positive;
  };

  const { good, neutral, bad } = state;
  const total = countTotalFeedback(state);
  const positivePercentage = countPositiveFeedbackPercentage(good, total);
  const btnNames = Object.keys(state);
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={btnNames} onLeaveFeedback={handleIncrement} />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={total}
            positivePercentage={positivePercentage}
          ></Statistics>
        )}
      </Section>
    </>
  );
};

export default App;
