import Image from 'next/image'
import Link from 'next/link'

import styles from './f_l.module.css'

import telegramSvg from '@/assets/images/icons/telegram.svg'

export const FooterFeedback = () => {
  return (
    <div className={styles.footer_feedback}>
      <div>
        По любым вопросам пишите на <span>privet@yandex.com</span>
      </div>
      <div>
        <Link href={'/'}>
          <Image src={telegramSvg} alt="" loading="lazy" /> Подписаться
        </Link>
      </div>
    </div>
  )
}
