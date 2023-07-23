import Skill from "../Skill/Skill";

import CodeIcon from "@mui/icons-material/Code";

import styles from "./End.module.css";

const FrontEnd = () => {
  return (
    <div className={styles.skillSectionHeaderFront}>
      <div className={styles.skillsFront}>
        <div className={styles.frontIcon}>
          <CodeIcon></CodeIcon>
          <p>Front end</p>
        </div>
        <div className={styles.skills}>
          <div className={styles.skillsContainer}>
            <div className={styles.skill}>
              <Skill progress="100"></Skill>
              <p>HTML</p>
            </div>
            <div className={styles.skill}>
              <Skill progress="90"></Skill>
              <p>CSS</p>
            </div>
            <div className={styles.skill}>
              <Skill progress="50"></Skill>
              <p>Tailwind</p>
            </div>
            <div className={styles.skill}>
              <Skill progress="80"></Skill>
              <p>React.js</p>
            </div>
            <div className={styles.skill}>
              <Skill progress="80"></Skill>
              <p>JavaScript</p>
            </div>
            <div className={styles.skill}>
              <Skill progress="70"></Skill>
              <p>TypeScript</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontEnd;
