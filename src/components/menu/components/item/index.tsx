'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './t_l.module.css'

type MenuItemType = {
  title: string
  link: string
  icon: string
  iconActive: string
}

export const MenuItem = ({ title, link, icon, iconActive }: MenuItemType) => {
  const pathname = usePathname()

  return (
    <li>
      <Link
        href={link}
        className={
          pathname === link
            ? `${styles.menu_item} ${styles.menu_item__active}`
            : `${styles.menu_item}`
        }
      >
        {icon && iconActive ? (
          <i
            style={{
              background: `url(${pathname === link ? iconActive : icon})`,
              width: 32,
              height: 32,
            }}
          />
        ) : (
          <></>
        )}
        {title}
      </Link>
    </li>
  )
}
/* 
<Image
            src={pathname === link ? iconActive : icon}
            alt={title}
            width={32}
            height={32}
          />
*/
