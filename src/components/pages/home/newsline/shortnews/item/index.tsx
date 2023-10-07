import Image from 'next/image'

import lightningSvg from '@/assets/images/icons/lightning.svg'

import styles from './t_l.module.css'

type ShortNewsItemType = {
  title: string
  publicationDate: {
    date: string
    time: string
  }
  category: string
}

export const ShortNewsItem = ({
  title,
  publicationDate,
  category,
}: ShortNewsItemType) => {
  return (
    <div className={styles.shortnews_item}>
      <div className={styles.image}>
        <Image src={lightningSvg} alt="" width={14} height={19} />
      </div>
      <div className={styles.news}>
        <p className={styles.title}>{title}</p>
        <div className={styles.info}>
          <span className={styles.info_time}>{publicationDate.time}</span>
          <span className={styles.info_category}>{category}</span>
        </div>
      </div>
    </div>
  )
}
