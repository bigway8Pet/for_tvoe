import { Reaction } from '@/components/reaction'

import styles from './t_l_ra.module.css'

type ReadAlsoCardType = {
  category: string
  publicationDate: {
    date: string
    time: string
  }
  title: string
  reactions: object[]
}

export const ReadAlsoCard = ({
  category,
  publicationDate,
  title,
  reactions,
}: ReadAlsoCardType) => {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <div className={styles.info_category}>{category}</div>
        <div className={styles.info_time}>
          {publicationDate.date},{publicationDate.time}
        </div>
      </div>
      <div className={styles.card_title}>{title}</div>
      <Reaction reactions={reactions} />
    </div>
  )
}
