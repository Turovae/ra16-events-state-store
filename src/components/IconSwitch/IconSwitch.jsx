import { PropTypes } from 'prop-types';
import './IconSwitch.css';

const IconSwitch = (props) => {
  return (
    <div className="store-menu">
      <span className='material-icons store-menu__button' onClick={props.onSwitch}>{props.icon}</span>
    </div>
  );
}

IconSwitch.propTypes = {
  icon: PropTypes.string,
  onSwitch: PropTypes.func,
}

export default IconSwitch;
