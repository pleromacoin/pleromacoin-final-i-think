import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.copyright}>
          © 2025 Pleroma Chain · In Logos, Fullness · PLEROMA BLOCKCHAIN
        </div>

        <div className={styles.links}>
          <Link href="/terms">
            <span className={styles.link}>Terms</span>
          </Link>
          <Link href="/privacy">
            <span className={styles.link}>Privacy</span>
          </Link>
          <Link href="/contact">
            <span className={styles.link}>Contact</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}