import { Incidents } from './incidents'
import { Newsline } from './newsline/indes'
import { ReadAlso } from './readAlso'

import styles from './t_l.module.css'

export const HomePage = () => {
  return (
    <div className={styles.homepage_content}>
      <Newsline ads={true} />
      <ReadAlso />
      <Incidents />
    </div>
  )
}
