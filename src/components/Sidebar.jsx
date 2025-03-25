import AppNav from './AppNav';
import Logo from './Logo';
import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
      </p>
      <footer className={styles.footer}></footer>
    </div>
  );
}

export default Sidebar;
