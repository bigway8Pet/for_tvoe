'use client'

import styles from './f_l.module.css'

export const FooterOfferNews = () => {
  return (
    <div className={styles.offer_news}>
      <button onClick={() => console.log('do something')}>
        Предложить новость
      </button>
    </div>
  )
}
