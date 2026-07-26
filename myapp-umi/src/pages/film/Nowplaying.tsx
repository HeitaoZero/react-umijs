import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useHistory } from 'umi'
export default function Nowplaying(props: any) {
    const [state, setState] = useState([])
    const history = useHistory()
    useEffect(() => {
        axios.get("https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6617025", {
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"17789596071300855399645185","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res => {
            setState(res.data.data.films)
        })
    }, [])
    interface FilmItem {
        filmId: number;   // 根据实际数据，可能是数字或字符串
        name: string;
        grade: string;             // 评分可能是 "9.2" 这样的字符串
        nation: string;            // 国家
        language: string;          // 语言
        [key: string]: any;
    }
    return (
        <div>
            Nowplaying
            {state.map((item: FilmItem) => (
                <div key={item.filmId} onClick={() => history.push(`/detail/${item.filmId}`)}>
                    {item.name}---
                    {item.grade}---
                    {item.nation}---
                    {item.language}
                </div>
            ))}
        </div>

    )
}
