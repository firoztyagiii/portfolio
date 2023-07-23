import Skill from "../Skill/Skill";
import StorageIcon from "@mui/icons-material/Storage";

import styles from "./End.module.css";
const BackEnd = () => {
  return (
    <div className={styles.skillSectionHeaderFront}>
      <div className={styles.skillsFront}>
        <div className={styles.frontIcon}>
          <StorageIcon></StorageIcon>
          <p>Back end</p>
        </div>
        <div className={styles.skills}>
          <div className={styles.skillsContainer}>
            <div className={styles.skill}>
              <Skill progress="80"></Skill>
              <p>Node.js</p>
            </div>
            <div className={styles.skill}>
              <Skill progress="90"></Skill>
              <p>Express</p>
            </div>
            <div className={styles.skill}>
              <Skill progress="80"></Skill>
              <p>MongoDB</p>
            </div>
            <div className={styles.skill}>
              <Skill progress="65"></Skill>
              <p>Redis</p>
            </div>
            <div className={styles.skill}>
              <Skill progress="70"></Skill>
              <p>TypeScript</p>
            </div>
            <div className={styles.skill}>
              <Skill progress="100  "></Skill>
              <p>Nginx</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackEnd;
