import PropTypes from 'prop-types';
import styled from 'styled-components';

const Btn = styled.button`
  margin: 8px;
  text-transform: capitalize;
  display: inline-block;
  outline: 0;
  border: 0;
  cursor: pointer;
  will-change: box-shadow, transform;
  background-image: linear-gradient(to right, #e052a0, #f15c41);
  box-shadow: 0px 2px 4px rgb(45 35 66 / 40%),
    0px 7px 13px -3px rgb(45 35 66 / 30%),
    inset 0px -3px 0px rgb(58 65 111 / 50%);
  padding: 0 32px;
  border-radius: 6px;
  color: #fff;
  height: 48px;
  font-size: 18px;
  text-shadow: 0 1px 0 rgb(0 0 0 / 40%);
  transition: box-shadow 0.15s ease, transform 0.15s ease;
  &:hover {
    box-shadow: 0px 4px 8px rgb(45 35 66 / 40%),
      0px 7px 13px -3px rgb(45 35 66 / 30%), inset 0px -3px 0px #3c4fe0;
    transform: translateY(-2px);
    background-image: linear-gradient(to right, #3ec7e0, #526bf4);
  }
  &:active {
    box-shadow: inset 0px 3px 7px #3c4fe0;
    transform: translateY(2px);
  }
`;

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(name => (
        <Btn type="button" onClick={onLeaveFeedback} key={name}>
          {name}
        </Btn>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
