import styles from '../public/css/error.module.css';
import Link from 'next/link'

function error() {
  return (
    <div className={styles.body}>
        <div className={styles.container}>
            <h1 className={styles.text}>404</h1>
            <p className={styles.paragh}>Oops! Page not found.</p>
            <Link href="/" className={styles.button}>Go to Home</Link>
        </div>
    </div>
  )
}

export default error;

