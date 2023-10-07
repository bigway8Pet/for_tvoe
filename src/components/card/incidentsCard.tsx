'use client'

import Image from 'next/image'
import { Reaction } from '@/components/reaction'

import styles from './t_l_i.module.css'

type IncidentsCardType = {
  publicationDate: {
    date: string
    time: string
  }
  title: string
  imageName: string
  reactions: object[]
}

export const IncidentsCard = ({
  publicationDate,
  title,
  imageName,
  reactions,
}: IncidentsCardType) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        <Image
          src={require(`@/assets/images/news/incidents/${imageName}.png`)}
          alt={title}
        />
      </div>
      <div className={styles.card_content}>
        <div className={styles.info}>
          <div className={styles.info_time}>
            {publicationDate.date},{publicationDate.time}
          </div>
        </div>
        <div className={styles.title}>{title}</div>
        <Reaction reactions={reactions} />
      </div>
    </div>
  )
}
