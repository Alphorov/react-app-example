import classes from './AppButton.module.css';


const AppButton = ({ children, ...props }) => {
    return (
        <button {...props} className={classes.appBtn}>
            {children}
        </button>
    );
}

export default AppButton