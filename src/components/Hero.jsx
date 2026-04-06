import React, { useEffect, useState } from 'react'
import { PROFILE } from '../data.js'
import styles from './Hero.module.css'

const HERO_BADGES = [
  { label: 'Java', cls: 'blue' },
  { label: 'Spring Boot', cls: 'blue' },
  { label: 'Spring Security', cls: 'blue' },
  { label: 'AWS EC2/RDS/S3', cls: 'green' },
  { label: 'Docker', cls: 'green' },
  { label: 'GitHub Actions', cls: 'green' },
  { label: 'React', cls: 'purple' },
  { label: 'TypeScript', cls: 'purple' },
  { label: 'KDT 주강사', cls: 'orange' },
  { label: 'NCS 확인강사', cls: 'orange' },
]

const GitHubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
  </svg>
)

const MailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)

export default function Hero() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { setTimeout(() => setVisible(true), 50) }, [])

  return (
    <section id="top" className={`${styles.hero} ${visible ? styles.visible : ''}`}>
      <div className={styles.prompt}>// fullstack developer & KDT instructor</div>
      <h1 className={styles.name}>
        {PROFILE.name}<br />
        <span className={styles.nameEn}>{PROFILE.nameEn}</span>
      </h1>
      <p className={styles.title}>
        <span className={styles.t1}>{PROFILE.title[0]}</span>
        <span className={styles.dot}> · </span>
        <span className={styles.t2}>{PROFILE.title[1]}</span>
      </p>
      <p className={styles.desc}>{PROFILE.desc}</p>
      <div className={styles.badges}>
        {HERO_BADGES.map(b => (
          <span key={b.label} className={`${styles.badge} ${styles[b.cls]}`}>{b.label}</span>
        ))}
      </div>
      <div className={styles.links}>
        <a href={PROFILE.github} target="_blank" rel="noreferrer" className={`${styles.btn} ${styles.btnPrimary}`}>
          <GitHubIcon /> GitHub
        </a>
        <a href={`mailto:${PROFILE.email}`} className={`${styles.btn} ${styles.btnSecondary}`}>
          <MailIcon /> Contact
        </a>
      </div>
    </section>
  )
}
