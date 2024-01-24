import styles from './App.module.scss';

export default function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/images/logo.png" className="logo" />
        </div>
        <div>
          <nav>
            <ul>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">Platforms</a>
              </li>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
            </ul>
          </nav>
        </div>

        <nav>
          <a href="/">Sign In</a>
          <a href="/" className="button">
            Get started for free
          </a>
        </nav>
      </header>

      <main>
        <section>
          <p className="border-text">
            Create forms for any website, without the pain
          </p>

          <h1>The easiest way to create an online form</h1>
          <p>
            Build forms in minutes instead of hours. The last form-builder
            you'll ever need.
          </p>
          <a href="/" className="button2">
            Create my first form for free
          </a>
          <p>Free plan, no credit-card -</p>
          <a href="/" className="pricing">
            View Pricing
          </a>
          <p>Trusted by agencies & freelancers ***adds 5 stars here***</p>
          <img
            className={styles.form}
            alt="form"
            src="https://useform.co/_next/image?url=%2F_static%2Fimages%2Ffeatures%2Fdashboard-satisfaction-form.png&w=1920&q=80"
          />
        </section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
      </main>

      <footer></footer>
    </div>
  );
}
