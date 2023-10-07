import Link from 'next/link'

import styles from './f_l.module.css'

interface ILinkItem {
  title: string
  href: string
}

export const LinkItem = ({ title, href }: ILinkItem) => {
  return (
    <li className={styles.link_item}>
      <Link href={href}>{title}</Link>
    </li>
  )
}
