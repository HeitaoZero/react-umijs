import React from 'react'
import { useParams } from 'umi'


interface IParams {
    id: string
}
export default function Detail(props: any) {
    const params = useParams<IParams>()
    console.log(params)
    return (
        <div>Detail--{params.id}</div>
    )
}
