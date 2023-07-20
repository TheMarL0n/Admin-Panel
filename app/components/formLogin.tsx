'use client'
import { useState } from "react"
const FormLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPasword] = useState('')
    const [error, setError] = useState(false)

    const getEmail = (e: any) => {
        setEmail(e.target.value)
    }

    const getPassword = (e: any) => {
        setPasword(e.target.value)
    }

    const formSubmit = (e: any) => {
        if ((email === "test@test.com") && (password === "123")) {
            e.preventDefault()
            alert("Logged in")
            setError(false)
        }
        else {
            setError(true)
        }
    }

    return (
        <form className='flex flex-col gap-3' action="">
            <input type="email" className='p-3 rounded-lg' placeholder='Email' onChange={getEmail} />
            <input type="password" className='p-3 rounded-lg' placeholder='Password' onChange={getPassword} />
            <input type="submit" className='p-3 rounded-lg bg-slate-400 uppercase' onClick={formSubmit} />
            {
                error ? <p className="border border-red-400 text-red-400 p-2">Wrong credentials, please try again</p> : ""
            }
        </form>
    )
}
export default FormLogin