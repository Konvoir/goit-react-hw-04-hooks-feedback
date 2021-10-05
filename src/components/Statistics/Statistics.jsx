import PropTypes from "prop-types";
import { Notification } from "../Notification/Notification";
import css from "./Statistics.module.css";

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <>
    {total ? (
      <ul className={css.list}>
        <li className={css.item}>Good: {good}</li>
        <li className={css.item}>Neutral: {neutral}</li>
        <li className={css.item}>Bad: {bad}</li>
        <li className={css.item}>Total: {total}</li>
        <li className={css.item}>Positive feedback: {positivePercentage}%</li>
      </ul>
    ) : (
      <Notification message="No feedback given"></Notification>
    )}
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
