import { ShortNews } from './shortnews'
import { NewslineTicker } from './ticker'
import { Ads } from '@/components/ads'

import styles from './t_l.module.css'

export const Newsline = ({ ads }: { ads: boolean }) => {
  return (
    <section className={styles.newsline_section}>
      <div className={styles.newsline}>
        <h2>Лента</h2>
        <ShortNews />
        <NewslineTicker text="ОЧЕНЬ ВАЖНАЯ НОВОСТЬ" />
      </div>
      {ads && <Ads />}
    </section>
  )
}
