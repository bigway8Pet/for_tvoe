import Link from 'next/link'
import Image from 'next/image'

import adsPng from '@/assets/images/ads-banner.png'

import styles from './f_l.module.css'

export const Ads = () => {
  return (
    <div className={styles.ads}>
      <div className={styles.ads_info}>
        <Link href={'/'}>Ссылка на сайт</Link>
        <span>Реклама</span>
      </div>
      <Image src={adsPng} alt="" loading="lazy" />
      <p className={styles.ads_description}>
        Текст длинного рекламного объявления
      </p>
    </div>
  )
}
