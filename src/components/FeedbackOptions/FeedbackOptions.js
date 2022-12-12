import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <div>
    <ul className={css.buttonList}>
      <li className={css.buttonItem}>
        <button
          className={css.button}
          type="button"
          onClick={() => onLeaveFeedback(options[0])}
        >
          Good
        </button>
      </li>
      <li>
        <button
          className={css.button}
          type="button"
          onClick={() => onLeaveFeedback(options[1])}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          className={css.button}
          type="button"
          onClick={() => onLeaveFeedback(options[2])}
        >
          Bad
        </button>
      </li>
    </ul>
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
