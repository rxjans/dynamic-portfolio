import styles from '../public/css/error.module.css';

function error() {
  return (
    <div class={styles.body}>
        <div className={styles.container}>
            <h1 className={styles.text}>404</h1>
            <p className={styles.paragh}>Oops! Page not found.</p>
            <a href="/" class={styles.button}>Go to Home</a>
        </div>
    </div>
  )
}

export default error;

