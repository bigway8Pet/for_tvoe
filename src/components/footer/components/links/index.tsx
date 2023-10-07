import React from 'react'
import { LinkItem } from './item'

import styles from './f_l.module.css'

const footerLinks = [
  {
    title: 'Контакты',
    href: '/',
  },
  {
    title: 'Редакция',
    href: '/',
  },

  {
    title: 'Политика конфиденциальности',
    href: '/',
  },
  {
    title: 'Условия использования',
    href: '/',
  },
  {
    title: 'Реклама',
    href: '/',
  },
]

export const FooterLinks = () => {
  return (
    <div className={styles.footer_links}>
      <ul>
        {footerLinks.slice(0, 2).map((link, idx) => (
          <LinkItem
            title={link.title}
            href={link.href}
            key={link.title + idx}
          />
        ))}
      </ul>
      <ul>
        {footerLinks.slice(2).map((link, idx) => (
          <LinkItem
            title={link.title}
            href={link.href}
            key={link.title + idx}
          />
        ))}
      </ul>
    </div>
  )
}
