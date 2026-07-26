import React from 'react'
import { Redirect } from 'umi'
function Auth(props: any) {
    if (localStorage.getItem('token')) {
        return props.children
    }
    return <Redirect to="/login" />

}


export default Auth