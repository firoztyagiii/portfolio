import Profile from "./components/Profile/Profile";

import styles from "./App.module.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Menu from "./components/Menu/Menu";

const App = () => {
  return (
    <main className={styles.main}>
      <Profile></Profile>
      <AboutMe></AboutMe>
    </main>
  );
};
export default App;
