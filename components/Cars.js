import Link from 'next/link'
import cardata from '../data'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

 function Cars({ cars }) {
  return (
    <>
     <main className={styles.main}>
     {cardata.map((data) => (
  <div className={styles.grid}>
    
    <div  className={styles.card} >
   
      <Image src={data.carImage} alt={data.carName}width={500}  height={500} />
      <h3>{data.carName}</h3>
    </div>
    <Link href="/components/Cars/[id]" >
        <a>Learn More</a>
      </Link>
      
  </div>
   ))}
</main>      
     
    </>
  )
}
export default Cars