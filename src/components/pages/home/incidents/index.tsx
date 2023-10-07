import Image from 'next/image'

import { sortIncidentsCardsData } from './i'

import arrowRight from '@/assets/images/icons/arrow-right.svg'

import styles from './t_l.module.css'
import { IncidentsCard } from '@/components/card/incidentsCard'

export const Incidents = () => {
  return (
    <section className={styles.incidents_section}>
      <div className={styles.incidents}>
        <div className={styles.incidents__title}>
          <h2 className={styles.incidents__title_text}>Проишествия</h2>
          <div className={styles.arrow_right_container}>
            <Image src={arrowRight} alt="" width={5} height={10} />
          </div>
        </div>
        <div className={styles.incidents__cards}>
          {sortIncidentsCardsData.slice(0, 4).map((incidentsCard) => (
            <IncidentsCard
              publicationDate={incidentsCard.publicationDate}
              title={incidentsCard.title}
              imageName={incidentsCard.imageName}
              reactions={incidentsCard.reactions}
              key={incidentsCard.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
