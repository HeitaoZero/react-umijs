import React from 'react'
import { useEffect, useState } from 'react'
import { useHistory } from 'umi'
import axios from 'axios'
export default function Login() {
    useEffect(() => {
        axios.get("/users").then(res => {
            console.log(res.data)
        })
    }, [])
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const history = useHistory()
    return (
        <div>Login
            <input type="text" onChange={(e: any) => { setUsername(e.target.value) }} />
            <br></br>
            <input type="password" onChange={(e: any) => { setPassword(e.target.value) }} />
            {username}--{password}
            <button onClick={() => {
                axios.post("/users/login", { username, password }).then(res => {
                    console.log(res.data)
                    if (res.data.code === 200) {
                        localStorage.setItem("token", res.data.data.token)
                        history.push("/center")
                    }else {
                        alert(res.data.message)
                    }
                })
            }}>登录</button>
        </div >
    )
}
