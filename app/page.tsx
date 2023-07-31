'use client'
import { useState } from 'react'
import FormLogin from './components/formLogin'
import Dashboard from './dashboard/page'


export default function Home() {

  //LOGIN HANDLER -------------------------------------------------
  const [isLogged, setIsLogged] = useState(false)
  const [error, setError] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPasword] = useState('')

  const getEmail = (e: any) => {
    setEmail(e.target.value)
  }
  const getPassword = (e: any) => {
    setPasword(e.target.value)
  }
  const formSubmit = (e: any) => {
    if ((email === "test@test.com") && (password === "123")) {
      e.preventDefault()
      setIsLogged(true)
      setError(false)
    }
    else {
      e.preventDefault()
      setError(true)
    }
  }
  //END LOGIN HANDLER ---------------------------------------------

  return (
    <main>
      {isLogged ?
        <Dashboard />
        :
        <FormLogin
          email={email}
          password={password}
          error={error}
          getEmail={getEmail}
          getPassword={getPassword}
          formSubmit={formSubmit} />
      }
    </main>
  )
}
