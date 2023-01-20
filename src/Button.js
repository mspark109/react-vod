import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text, fontSize = 18 }) {
  return (
    <button className={styles.btn} style={{ fontSize }}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
};
export default Button;
