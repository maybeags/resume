import React from 'react'
import Section from './Section.jsx'
import { CERTS } from '../data.js'
import styles from './About.module.css'

const DOT_COLOR = { green: 'var(--green)', purple: 'var(--purple)' }

export default function About() {
  return (
    <Section id="about" num="01" title="About">
      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.cardLabel}>Education</div>
          <div className={styles.cardValue}>
            부산대학교 영어교육과
            <div className={styles.sub}>2011.03 – 2016.02 · 졸업</div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardLabel}>Current Role</div>
          <div className={styles.cardValue}>
            코리아아이티아카데미 부산
            <div className={styles.sub}>KDT 풀스택 주강사 · 2024.06 – present</div>
          </div>
        </div>

        <div className={`${styles.card} ${styles.wide}`}>
          <div className={styles.cardLabel}>Certifications</div>
          <div className={styles.certGrid}>
            {CERTS.map(c => (
              <div key={c.name} className={styles.certItem}>
                <span className={styles.certDot} style={{ background: DOT_COLOR[c.color] }} />
                <span>{c.name} · {c.date}</span>
              </div>
            ))}
          </div>
          <div className={styles.ncsNote}>
            ★ NCS 정보기술개발 현재 63점 · 교육 현장 경력 반영 시 <strong>70점 예상</strong> (변경신청 진행 중)
          </div>
        </div>
      </div>
    </Section>
  )
}
