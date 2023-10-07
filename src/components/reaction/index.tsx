'use client'
import { useEffect, useState } from 'react'

import styles from './t_l.module.css'
import Image from 'next/image'

/*
interface IReactionsType {
  heart_eyes?: number
  rage?: number
  poo?: number
  comments?: number
  bookmarks?: number
  likes?: number
} */

type ReactionsType = /* IReactionsType[] */ object[]

export const Reaction = ({ reactions }: { reactions: ReactionsType }) => {
  const [reaction, setReaction] = useState<ReactionsType>([])
  useEffect(() => {
    setReaction(reactions)
  }, [reactions])

  return (
    <div className={styles.reactions}>
      {reaction?.map((item, idx) => (
        <div className={styles.reaction} key={idx}>
          <div className={styles.reaction__img}>
            <Image
              src={require(`@/assets/images/icons/reaction/${Object.keys(
                item
              )}.svg`)}
              alt=""
            />
          </div>
          <span className={styles.reaction__count}>{Object.values(item)}</span>
        </div>
      ))}
    </div>
  )
}
