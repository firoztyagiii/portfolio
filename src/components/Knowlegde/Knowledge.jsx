import PsychologyIcon from "@mui/icons-material/Psychology";
import CheckIcon from "@mui/icons-material/Check";

import styles from "./Knowledge.module.css";

const Knowledge = () => {
  return (
    <div className={styles.skillSectionHeaderFront}>
      <div className={styles.skillsFront}>
        <div className={styles.frontIcon}>
          <PsychologyIcon></PsychologyIcon>
          <p>Knowlegde</p>
        </div>
        <div className={styles.knowledgeItems}>
          <div className={styles.knowledgeItem}>
            <CheckIcon></CheckIcon>
            <p>Website deployment</p>
          </div>
          <div className={styles.knowledgeItem}>
            <CheckIcon></CheckIcon>
            <p>Responsive and mobile-ready</p>
          </div>
          <div className={styles.knowledgeItem}>
            <CheckIcon></CheckIcon>
            <p>Debugging</p>
          </div>
          <div className={styles.knowledgeItem}>
            <CheckIcon></CheckIcon>
            <p>Problem solving</p>
          </div>
          <div className={styles.knowledgeItem}>
            <CheckIcon></CheckIcon>
            <p>Strong Communication Skills</p>
          </div>
          <div className={styles.knowledgeItem}>
            <CheckIcon></CheckIcon>
            <p>Git</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
