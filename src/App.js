import styles from './App.module.scss';

export default function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <img src="/images/logo.webp" alt="Logo" />
          </div>
          <nav>
            <ul>
              <li>
                <a className={styles.link} href="/">
                  Pricing
                </a>
              </li>
              <li>
                <a className={styles.link} href="/">
                  Platforms
                </a>
              </li>
              <li>
                <a className={styles.link} href="/">
                  Features
                </a>
              </li>
              <li>
                <a className={styles.link} href="/">
                  Pricing
                </a>
              </li>
              <li>
                <a className={styles.link} href="/">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li>
                <a className={styles.link} href="/">
                  Sign In
                </a>
              </li>
              <li>
                <button type="button">Get started for free</button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
