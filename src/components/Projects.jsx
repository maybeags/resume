import React from 'react'
import Section from './Section.jsx'
import { PROJECTS } from '../data.js'
import styles from './Projects.module.css'

const TAG_CLASS = {
  accent:  styles.tagBlue,
  green:   styles.tagGreen,
  purple:  styles.tagPurple,
  default: styles.tagDefault,
}

const GitHubIcon = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
  </svg>
)

const ExternalIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

export default function Projects() {
  return (
    <Section id="projects" num="05" title="Projects">
      <div className={styles.list}>
        {PROJECTS.map((p, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.header}>
              <div className={styles.name}>
                <span className={styles.repoIcon}>[repo]</span>
                {p.name}
              </div>
              <div className={styles.links}>
                {p.links.map(l => (
                  <a
                    key={l.label}
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`${styles.link} ${l.color === 'green' ? styles.linkGreen : ''}`}
                  >
                    {l.label === 'Live' ? <ExternalIcon /> : <GitHubIcon />}
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
            <p className={styles.desc}>{p.desc}</p>
            <div className={styles.stack}>
              {p.tags.map(t => (
                <span
                  key={t.label}
                  className={`${styles.tag} ${TAG_CLASS[t.color] || styles.tagDefault}`}
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
