import PropTypes from "prop-types";
import css from "./Section.module.css";

export const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <h1 className={css.title}>{title}</h1>
      {children}
    </section>
  );
};

Section.defaultPropes = {
  title: "",
  children: [],
};

Section.propTypes = {
  title: PropTypes.string,
};
