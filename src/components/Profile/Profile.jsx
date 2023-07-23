import Menu from "../Menu/Menu";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DownloadIcon from "@mui/icons-material/Download";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.mainLeft}>
      <Menu></Menu>
      <div className={styles.back}></div>
      <div className={styles.bgImgContainer}>
        <img className={styles.bgImg} src="bg.jpg"></img>
      </div>
      <div className={styles.details}>
        <div className={styles.meContainer}>
          <img className={styles.me} src="Me.jpg"></img>
        </div>
        <p className={styles.name}>Firoz Tyagi</p>
        <p className={styles.position}>MERN Stack Developer</p>
        <div className={styles.icons}>
          <InstagramIcon></InstagramIcon>
          <GitHubIcon></GitHubIcon>
          <LinkedInIcon></LinkedInIcon>
          <WhatsAppIcon></WhatsAppIcon>
        </div>
      </div>
      <div className={styles.profileBtn}>
        <a>
          Download CV
          <DownloadIcon></DownloadIcon>
        </a>
        <a>
          Contact Me
          <ContactPhoneIcon></ContactPhoneIcon>
        </a>
      </div>
    </div>
  );
};

export default Profile;
