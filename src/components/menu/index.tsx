import { menuData } from './menu'

import styles from './t_l.module.css'

import { MenuItem } from './components/item'

export const Menu = () => {
  return (
    <ul className={styles.menu}>
      {menuData.map((item) => (
        <MenuItem
          title={item.title}
          link={item.link}
          icon={item.icon.default.src}
          iconActive={item.iconActive.default.src}
          key={item.id}
        />
      ))}
    </ul>
  )
}
