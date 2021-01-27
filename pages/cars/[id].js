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
    <h3>{data.carName}</h3>
    <h3>{Car.id}</h3>
    </div>
   </div>
  
  )
}
export  default Cars;