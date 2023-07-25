import { Link } from "react-router-dom"
import {useState} from 'react'

export default function LoginPage() {
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')

    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mt-34">
            <h1 className="text-4xl text-centermb-4">Login</h1>
            <form className="max-w-sl max-auto ">
                <input type="email" placeholder="your@email.com" value= {email} onChange={ev => setEmail (ev.target.value)}/>
                <input type="password" placeholder="password"  value= {password} onChange={ev => setPassword (ev.target.value)}/>
                <button className="primary">Login</button>
                <div className="text-center py-2 text-gray-500">
                    Don't have an account yet? <Link className="underline text-black" to={"/register"}>Register</Link>
                </div>
            </form>
            </div>
        </div>
    )
}