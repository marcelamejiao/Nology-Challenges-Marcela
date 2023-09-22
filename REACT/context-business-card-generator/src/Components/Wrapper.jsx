import styles from "./Wrapper.module.scss";

const Wrapper = ( { children }) => {

	return (
		<div className={styles.wrap}>{children}</div>
	);
}

export default Wrapper;