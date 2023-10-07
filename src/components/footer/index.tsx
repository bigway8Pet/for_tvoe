import styles from './t_l.module.css'

import { FooterLinks } from './components/links'
import { FooterFeedback } from './components/feedback'
import { FooterInfo } from './components/info'
import { FooterOfferNews } from './components/offerNews'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterInfo />
      <div style={{ display: 'flex', marginRight: '97px' }}>
        <FooterLinks />
        <FooterFeedback />
      </div>
      <FooterOfferNews />
    </footer>
  )
}

/* 
justify-content: space-between было бы логичнее использовать
*/
