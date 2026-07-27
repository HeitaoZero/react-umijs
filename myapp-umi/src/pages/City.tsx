import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { IndexBar, List } from 'antd-mobile'
import { useHistory } from 'umi'
import { connect } from 'umi'

function City(props: any) {
    const [list, setList] = useState([])
    const history = useHistory()
    const filterCity = (cities: any) => {
        const newlist: any = []
        const latterArr: Array<string> = []
        for (var i = 65; i < 91; i++) {
            latterArr.push(String.fromCharCode(i))
        }

        for (var m in latterArr) {
            var cityItem = cities.filter((item: any) => item.pinyin.substring(0, 1).toUpperCase() === latterArr[m])
            cityItem.length && newlist.push({
                title: latterArr[m],
                items: cityItem
            })
        }
        return newlist
    }
    const cityChange = (name: string, id: number) => {
        console.log(name, id)
        props.dispatch({
            type: 'city/changeCity',
            payload: {
                cityName: name,
                cityID: id
            }
        })
        history.push(`/cinema`)
    }

    useEffect(() => {
        // 获取城市列表数据
        axios.get("https://m.maizuo.com/gateway?k=7627740", {
            headers: {
                "x-client-info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"1785052008255035158036481"}',
                "x-host": "mall.film-ticket.city.list"
            }
        }).then(res => {
            setList(filterCity(res.data.data.cities))
        })
    }, [])
    return (
        <div style={{ height: window.innerHeight }}>
            <IndexBar>
                {list.map((item: any) => {
                    const { title, items } = item
                    return (
                        <IndexBar.Panel
                            index={title}
                            title={title}
                            key={title}
                        >
                            <List>
                                {items.map((item: any, index: number) => (

                                    <List.Item key={index} onClick={() => { cityChange(item.name, item.cityId) }}>{item.name}</List.Item>
                                ))}
                            </List>
                        </IndexBar.Panel>
                    )
                })}
            </IndexBar>
        </div>
    )
}

export default connect()(City)