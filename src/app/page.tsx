import { Menu } from '@/components/menu'
import styles from './page.module.css'
import { HomePage } from '@/components/pages/home'

export default function Home() {
  return (
    <main className={styles.main}>
      <Menu />
      <HomePage />
    </main>
  )
}
