import classes from "./AppInput.module.css";

const AppInput = (props) => {
  return <input {...props} className={classes.appInput} />;
};

export default AppInput;
