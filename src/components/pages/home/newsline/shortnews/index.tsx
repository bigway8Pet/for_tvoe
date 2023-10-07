import styles from './t_l.module.css'

import { sortShortnewsData } from './shortnews'
import { ShortNewsItem } from './item'

export const ShortNews = () => {
  return (
    <div className={styles.shortnews}>
      {sortShortnewsData.slice(0, 4).map((shortnews) => (
        <ShortNewsItem
          title={shortnews.title}
          publicationDate={shortnews.publicationDate}
          category={shortnews.category}
          key={shortnews.id}
        />
      ))}
    </div>
  )
}
