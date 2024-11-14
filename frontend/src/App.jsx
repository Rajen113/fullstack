import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import LoginPage from './components/form/LoginPage'
import SignupForm from './components/form/SignupForm'

function App() {
  const [count, setCount] = useState(0)
  const [apidata,setApidata]=useState([])
  const [users,setUsers]=useState([])

  useEffect(()=>{
    const apiHandle=async()=>{
     const apiData= await fetch("http://localhost:3000/api/jokes")
    .then((response)=> response.json())
    .then((data)=>setApidata(data))
    }
    apiHandle()

    const handleUsers=async()=>{
      const user= await fetch("http://localhost:3000/user")
      .then(response=>response.json())
      .then(data=>setUsers(data))
    }
    handleUsers()
  },[users])
  console.log(users)
  return (
    <>
    {/* <div>
      {
        apidata.map((joke,index)=>{
          return(
            <div key={index}>
              <h2>{joke.joke}</h2>
            </div>
          )
        })
      }
    </div> */}
    {/* <Form/>
    <div>
      <h2 className=''>users</h2>
      {
        users.map((user,index)=>(
          <div>
            <h2 key={index}>username -- {user.username}    and      email ----- {user.email}</h2>
          </div>
        ))
      }
    </div> */}
    <SignupForm/>
    {/* <LoginPage/> */}
    </>
  )
}

export default App
