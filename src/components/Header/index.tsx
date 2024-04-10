import Logo from "../../assets/logo.png";
import styles from "./styles.module.scss";
function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="logo" />
    </header>
  );
}

export default Header;
