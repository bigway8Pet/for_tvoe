import Link from 'next/link'

import { HeaderContent } from './components/content'

import styles from './t_l.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href={'/'}>LOGO</Link>
      <HeaderContent />
    </header>
  )
}
