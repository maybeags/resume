import React, { useState } from 'react'
import styles from './Nav.module.css'

const NAV_ITEMS = ['about', 'skills', 'experience', 'teaching', 'projects']

export default function Nav({ scrolled }) {
  const [open, setOpen] = useState(false)

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#top" className={styles.logo}>maybeags ~$</a>

        <div className={`${styles.links} ${open ? styles.open : ''}`}>
          {NAV_ITEMS.map(item => (
            <a
              key={item}
              href={`#${item}`}
              className={styles.link}
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>

        <button className={styles.hamburger} onClick={() => setOpen(o => !o)} aria-label="메뉴">
          <span className={`${styles.bar} ${open ? styles.bar1open : ''}`} />
          <span className={`${styles.bar} ${open ? styles.bar2open : ''}`} />
          <span className={`${styles.bar} ${open ? styles.bar3open : ''}`} />
        </button>
      </div>
    </nav>
  )
}
