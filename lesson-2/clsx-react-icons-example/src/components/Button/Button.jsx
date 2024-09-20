import clsx from "clsx";

import styles from "./Button.module.css";

const Button = ({type = "button", success, outline, children})=> {
    // const classname = clsx(styles.btn, success && styles.success, outline && styles.outline);
    const classname = clsx(styles.btn, {
        [styles.success]: success,
        [styles.outline]: outline,
    });

    return <button className={classname} type={type}>{children}</button>
}

export default Button;