import Image from 'next/image'
import styles from './page.module.css'
import FirstImg from '/public/firstImg.jpeg'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <a href="twitter/OneThousandAndSixHundred">
          Twitter
        </a>
        <a href="instagram/EightHundredAndFourHundred">
          Instagram
        </a>
      </div>


    </main>
  )
}
