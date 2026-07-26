import React from 'react'
import { Redirect, useLocation } from 'umi'

export default function Film(props: any) {
    const loacation = useLocation()
    console.log(loacation)
    console.log(props)
    if (loacation.pathname === '/film' || loacation.pathname === '/film/') {
        return <Redirect to="/film/nowplaying" />
    }
    return (
        <div>
            Film
            {props.children}
        </div>
    )
}
