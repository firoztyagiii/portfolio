import PersonIcon from "@mui/icons-material/Person";
import ListAltIcon from "@mui/icons-material/ListAlt";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <ul className={styles.menu}>
      <li>
        <PersonIcon></PersonIcon>
        <p>About</p>
      </li>
      <li>
        <ListAltIcon></ListAltIcon>
        <p>Resume</p>
      </li>
      <li>
        <VisibilityIcon></VisibilityIcon>
        <p>Works</p>
      </li>
      <li>
        <ContactPhoneIcon></ContactPhoneIcon>
        <p>Contact</p>
      </li>
    </ul>
  );
};

export default Menu;
