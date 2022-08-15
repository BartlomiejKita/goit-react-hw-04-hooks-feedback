import PropTypes from 'prop-types';

const Notification = ({ message}) => {
  return (
    <>
      <p>{message}</p>
    </>
  );
};

Notification.propTypes = {
  title: PropTypes.string,
 
};

export default Notification;
