import Image from 'next/image'
import { Calendar } from './calendar'
import { currency } from './currency'

import styles from './t_l.module.css'

import dateSvg from '@/assets/images/icons/calendar.svg'

type IContentItem = {
  name: string
  value?: string | number
}

export const ContentItem = ({ name, value }: IContentItem) => {
  return (
    <>
      {currency.some((item) => item.name === name) ? (
        <div className={styles.content_item}>
          <Image
            src={currency.find((item) => item.name === name)?.label}
            alt={name}
          />
          <div>{value}</div>
        </div>
      ) : (
        <div className={styles.content_item}>
          <Image src={dateSvg} alt={name} priority />
          <div>{Calendar()}</div>
        </div>
      )}
    </>
  )
}
// можно улучшить функционал, добавив currencyIconUrl вместо dateSvg (и value вместо Calendar() сооствествено) + добавить в type, если потребуется извне добавлять новые валюты
// использовав дефолтные значения календаря у пропсов
