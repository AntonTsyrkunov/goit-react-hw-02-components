import PropTypes from 'prop-types';
import css from '../styles/FeedbackOptions.module.css'

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={css.buttons_wrapper}>
        {
            options.map((opt) => <button 
            key={opt} 
            onClick={() => onLeaveFeedback(opt)}
            className={css.button}>{opt}</button>)
        }
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired, 
  onLeaveFeedback: PropTypes.func.isRequired,
}
