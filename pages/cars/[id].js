import { useRouter } from 'next/router'
import useSWR from 'swr'
import cardata from '../../data'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
} 

 function Cars() {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.id  && `/api/${query.id}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return (
   
   <div>
    <div>
    <div className={styles.main-container}>
          <div className={styles.subcontainer}>
          <div className={styles.left-continer}>
          <Image src={car.carImage} alt={car.carName}width={500}  height={500} />
        </div>
        <div className={styles.right-container}>
        <h3>{car.carName}</h3>
        <p>{car.carCost}</p>
        <p>{car.fuelType}</p>
        <h4>{car.showroomDetails}</h4>
        </div>
          </div>
        </div>
    </div>
   </div>
  
  )
}
export  default Cars;