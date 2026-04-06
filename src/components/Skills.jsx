import React from 'react'
import Section from './Section.jsx'
import { SKILLS } from '../data.js'
import styles from './Skills.module.css'

const COLOR_MAP = {
  accent: { tag: styles.tagBlue },
  green:  { tag: styles.tagGreen },
  purple: { tag: styles.tagPurple },
  orange: { tag: styles.tagOrange },
}

const GROUP_COLOR = {
  accent: '#58a6ff',
  green:  '#3fb950',
  purple: '#d2a8ff',
  orange: '#f0883e',
}

export default function Skills() {
  return (
    <Section id="skills" num="02" title="Skills">
      <div className={styles.grid}>
        {SKILLS.map(sg => (
          <div key={sg.group} className={styles.group}>
            <div className={styles.groupTitle} style={{ color: GROUP_COLOR[sg.color] }}>
              {sg.group.toUpperCase()}
            </div>
            <div className={styles.tags}>
              {sg.tags.map(t => (
                <span
                  key={t.label}
                  className={`${styles.tag} ${t.hot ? COLOR_MAP[sg.color].tag : styles.tagDefault}`}
                >
                  {t.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
