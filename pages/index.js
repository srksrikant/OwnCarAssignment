import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from "next/link";
import cardata from '../data'


export default function Home(caretails) {
  return (
    <div className={styles.container}>
      <Head>
        <title>owncar</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
        {cardata.map((car) => (     
          <div  className={styles.card} >
            <Image src={car.carImage} alt={car.carName}width={500}  height={500} />
            <h3>{car.carName}</h3>
            <Link  href="/cars/[id]" as={`/cars/${car.id}`} key={car.id}>
            <a >Learn More</a>
            </Link>
          </div>
        ))}
        </div>
      </main>      
      <footer className={styles.footer}>
        <div >
        Created By Srk Srikant      
        </div>
      </footer>
    </div>
  )
}
