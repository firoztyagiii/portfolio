import styles from "./Launguage.module.css";

import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import CircleIcon from "@mui/icons-material/Circle";

const Language = () => {
  let circles = new Array();
  console.log(circles);
  return (
    <div className={styles.skillSectionHeaderFront}>
      <div className={styles.skillsFront}>
        <div className={styles.frontIcon}>
          <RecordVoiceOverIcon></RecordVoiceOverIcon>
          <p>Languages</p>
        </div>
        <div className={styles.languageItems}>
          <div className={styles.languageItem}>
            <p>Hindi</p>
            <div className={styles.languageCirlce}>
              {circles.map((item, index) => {
                return <CircleIcon key={index}></CircleIcon>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Language;
