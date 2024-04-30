import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {

  const [ data, setData ] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api-test-2tun.onrender.com/api/users')
        setData(response.data.users)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return(
    <>
      <div>
        <h1>Users</h1>
        <ul>
          {data.map(({ id, name, email }) => (
            <li key={id}>{name} - {email}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App;