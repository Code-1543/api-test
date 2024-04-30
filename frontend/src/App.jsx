import { useState, useEffect } from 'react'
import axios from 'axios'
const App = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://api-test-2tun.onrender.com/api/users')
        setData(response)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
    console.log(data)
  }, [])

  return (
    <>
      <h1>Users</h1>
      <ul>
        
      </ul>
    </>
  )
}

export default App