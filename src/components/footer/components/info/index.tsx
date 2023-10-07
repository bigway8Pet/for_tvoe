import Link from 'next/link'

import styles from './f_l.module.css'

export const FooterInfo = () => {
  return (
    <div className={styles.footer_info}>
      <Link href={'/'}>LOGO</Link>
      <span>© НАЗВАНИЕ 2023. Все права защищены</span>
    </div>
  )
}
