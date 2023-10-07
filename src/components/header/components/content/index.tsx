import { ContentItem } from './item'
import styles from './t_l.module.css'

const items = [
  {
    name: 'calendar',
  },
  {
    name: 'dollar',
    value: '96.34',
  },
  {
    name: 'euro',
    value: '104.61',
  },
  {
    name: 'bitcoin',
    value: '25.725',
  },
]

export const HeaderContent = () => {
  return (
    <div className={styles.content}>
      {items.map((item, idx) => {
        return (
          <ContentItem
            name={item.name}
            value={item.value}
            key={item.name + idx}
          />
        )
      })}
    </div>
  )
}
