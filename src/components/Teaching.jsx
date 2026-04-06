import React from 'react'
import Section from './Section.jsx'
import { TEACHING } from '../data.js'
import styles from './Teaching.module.css'

export default function Teaching() {
  return (
    <Section id="teaching" num="04" title="Teaching Curriculum">
      <div className={styles.grid}>
        {TEACHING.map(item => (
          <div key={item.name} className={styles.card}>
            <div className={styles.icon} style={{ color: item.color }}>
              [{item.icon}]
            </div>
            <div className={styles.name}>{item.name}</div>
            <ul className={styles.list}>
              {item.items.map(li => (
                <li key={li} className={styles.listItem}>{li}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
