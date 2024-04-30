import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  
  const [ engUsersData, setEngUsersData ] = useState([])
  const [ thaiUsersData, setThaiUsersData ] = useState([])
  const [ engProductsData, setEngProductsData ] = useState([])
  const [ thaiProductsData, setThaiProductsData ] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api-test-2tun.onrender.com/free/api')
        setEngUsersData(response.data.users[0].users_en)
        setThaiUsersData(response.data.users[0].users_th)
        setEngProductsData(response.data.products[0].products_en)
        setThaiProductsData(response.data.products[0].products_th)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <div>
        <p>
          <h1>Eng Users</h1>
          <ul>
            {engUsersData.map(({id, name, email}) => (
              <li key={id}>{name} - {email}</li>
            ))}
          </ul>
        </p>
        <p>
          <h1>Thai Users</h1>
          <ul>
            {thaiUsersData.map(({id, name, email}) => (
              <li key={id}>{name} - {email}</li>
            ))}
          </ul>
        </p>
        <p>
          <h1>Eng Products</h1>
          <ul>
          {engProductsData.map(({product_id, product_name, price}) => (
              <li key={product_id}>{product_name} - {price}</li>
            ))}
          </ul>
        </p>
        <p>
          <h1>Thai Products</h1>
          <ul>{thaiProductsData.map(({product_id, product_name, price}) => (
            <li key={product_id}>{product_name} - {price}</li>
          ))}</ul>
        </p>
      </div>
    </>
  )
}

export default App