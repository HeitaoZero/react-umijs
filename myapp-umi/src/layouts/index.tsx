import React from 'react'
import { NavLink } from 'umi'
import './index.less'

export default function IndexLayout(props: any) {
    if (props.location.pathname === "/city" || props.location.pathname.includes("/detail"))
        return <div>{props.children}</div>
    return (
        <div>
            IndexLayout
            <ul>
                <li className='active'><NavLink to="/film">film</NavLink></li>
                <li className='active'><NavLink to="/cinema">cinema</NavLink></li>
                <li className='active'><NavLink to="/center">center</NavLink></li>
            </ul>
            {props.children}
        </div>
    )
}
