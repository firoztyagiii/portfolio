import BackEnd from "../End/BackEnd";
import FrontEnd from "../End/FrontEnd";
import Tab from "../UI/Tab";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={styles.aboutMe}>
      <Tab>About Me</Tab>
      <div className={styles.aboutMeDetails}>
        <div className={styles.aboutMeText}>
          <h2>Hello! I’m Donald Wellborn.</h2>
          <p>
            Back-end & Frond-end developer from UK, London. I have rich
            experience in wordpress, also I am good at Magento. I love to talk
            with you about our unique.
          </p>
          <div className={styles.aboutMePersonal}>
            <div>
              <p className={styles.aboutMePersonalKey}>AGE...</p>
              <p>19</p>
            </div>
            <div>
              <p className={styles.aboutMePersonalKey}>RESIDENCE...</p>
              <p>New Delhi</p>
            </div>
            <div>
              <p className={styles.aboutMePersonalKey}>FREELANCE...</p>
              <p>Available</p>
            </div>
            <div>
              <p className={styles.aboutMePersonalKey}>LOCATION...</p>
              <p>India</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.skillsSection}>
        <Tab>Skills</Tab>
        <div className={styles.skillSectionHeader}>
          <FrontEnd></FrontEnd>
          <BackEnd></BackEnd>
          <div>fsjhfdj</div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
{
  /* <div className={styles.serviceItem}>
          <ServiceItem
            title="Front-end"
            desc="Modern and mobile-ready website that will help you reach all of your marketing."
            Icon={<HtmlIcon></HtmlIcon>}
          ></ServiceItem>
        </div> */
}
