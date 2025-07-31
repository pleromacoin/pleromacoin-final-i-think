import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Header.module.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <span className={styles.logoText}>PLEROMA</span>
        </Link>
      </div>

      <button 
        className={styles.menuButton} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
        <Link href="/">
          <span className={styles.navLink}>Home</span>
        </Link>
        <Link href="/dashboard">
          <span className={styles.navLink}>Wallet</span>
        </Link>
        <Link href="/whitepaper">
          <span className={styles.navLink}>Whitepaper</span>
        </Link>
      </nav>
    </header>
  )
}