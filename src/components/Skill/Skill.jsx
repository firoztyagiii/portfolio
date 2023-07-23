import styles from "./Skill.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skill = ({ progress }) => {
  return (
    <div style={{ width: 65, height: 65 }}>
      <CircularProgressbar
        styles={buildStyles({
          pathColor: " #f6b846",
          textColor: "#f6b846",
        })}
        value={progress}
        text={`${progress}%`}
      />
    </div>
  );
};

export default Skill;
