import styles from "./Tab.module.css";
const Tab = ({ children }) => {
  return (
    <div className={styles.tabContainer}>
      <p className={styles.tabName}>{children}</p>
    </div>
  );
};

export default Tab;
