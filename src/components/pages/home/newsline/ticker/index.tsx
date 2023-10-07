import Image from 'next/image'

import fireSvg from '@/assets/images/icons/fire.svg'

import styles from './t_l.module.css'

type Ticker = {
  text: string
  duration?: number
}

export const NewslineTicker = ({ text, duration = 20 }: Ticker) => {
  const tickerItem = <TickerItem text={text} />
  return (
    <div className={styles.ticker}>
      <div
        className={styles.marquee}
        style={{ animationDuration: `${duration}s` }}
      >
        <TickerItem text={text} />
        <TickerItem text={text} />
        <TickerItem text={text} />
      </div>
      <div
        className={styles.marquee}
        style={{ animationDuration: `${duration}s` }}
        area-hidden="true"
      >
        <TickerItem text={text} />
        <TickerItem text={text} />
        <TickerItem text={text} />
      </div>
    </div>
  )
}

const TickerItem = ({ text }: { text: string }) => {
  return (
    <div className={styles.item}>
      <Image src={fireSvg} alt="" /> {text}
    </div>
  )
}
