import React from 'react'
import Section from './Section.jsx'
import { EXPERIENCE } from '../data.js'
import styles from './Experience.module.css'

const DOT_COLOR = { accent: 'var(--accent)', green: 'var(--green)' }

export default function Experience() {
  return (
    <Section id="experience" num="03" title="Experience">
      <div className={styles.timeline}>
        {EXPERIENCE.map((item, i) => (
          <div key={i} className={styles.item}>
            <div
              className={styles.dot}
              style={{ background: DOT_COLOR[item.color] }}
            />
            <div className={styles.content}>
              <div className={styles.period}>{item.period}</div>
              <div className={styles.role}>{item.role}</div>
              <div
                className={styles.org}
                style={{ color: DOT_COLOR[item.color] }}
              >
                {item.org}
              </div>
              <p className={styles.desc}>{item.desc}</p>
              <div className={styles.tags}>
                {item.tags.map(t => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
