import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.container}>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className={s.button}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
