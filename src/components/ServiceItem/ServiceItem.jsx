import styles from "./Service.module.css";
const ServiceItem = ({ Icon, title, desc }) => {
  return (
    <div className={styles.service}>
      {Icon}
      <p className={styles.service.titke}>{title}</p>
      <p>{desc}</p>
    </div>
  );
};

export default ServiceItem;
