import Image from 'next/image'
import { ReadAlsoCard } from '@/components/card/readAlsoCard'

import { sortReadAlsoCardsData } from './ra'

import arrowRight from '@/assets/images/icons/arrow-right.svg'

import styles from './t_l.module.css'

export const ReadAlso = () => {
  return (
    <section className={styles.read_also_section}>
      <div className={styles.read_also}>
        <div className={styles.read_also__title}>
          <h2 className={styles.read_also__title_text}>Читайте также</h2>
          <div className={styles.arrow_right_container}>
            <Image src={arrowRight} alt="" width={5} height={10} />
          </div>
        </div>
        <div className={styles.read_also__cards}>
          {sortReadAlsoCardsData.slice(0, 4).map((readAlsoCard) => (
            <ReadAlsoCard
              category={readAlsoCard.category}
              publicationDate={readAlsoCard.publicationDate}
              title={readAlsoCard.title}
              reactions={readAlsoCard.reactions}
              key={readAlsoCard.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
