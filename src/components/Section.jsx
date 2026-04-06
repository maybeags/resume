import React, { useEffect, useRef, useState } from 'react'
import styles from './Section.module.css'

export default function Section({ id, num, title, children }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id={id}
      ref={ref}
      className={`${styles.section} ${visible ? styles.visible : ''}`}
    >
      <div className={styles.label}>// {num}</div>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  )
}
