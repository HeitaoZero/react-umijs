import React from 'react'
import { NavBar } from 'antd-mobile'
import { SearchOutline } from 'antd-mobile-icons'
import { useHistory } from 'umi'
import { connect } from 'umi'
import { useEffect } from 'react'
function Cinema(props: any) {
    const history = useHistory()
    console.log(props)
    useEffect(() => {
        if (props.cinema.list.length === 0) {
            // 取数据
            console.log(props.city.cityID)
            props.dispatch({
                type: 'cinema/getList',
                payload: {
                    cityID: props.city.cityID
                }
            })
        } else {
            console.log("缓存")

        }
    }, [])
    return (
        <div>
            Cinema
            <NavBar onBack={() => {
                // console.log("cilck")
                props.dispatch({
                    type: 'cinema/clearList'
                })
                history.push("/city")
            }} back={props.city.cityName}
                right={<SearchOutline />}
                backIcon={false}
            >标题</NavBar>
            {props.cinema.list.map((item: any) => (
                <div key={item.cinemaId}>
                    {item.name}
                </div>
            ))}
        </div>
    )
}

export default connect((state: any) => {
    return {
        city: state.city,
        cinema: state.cinema
    }
})(Cinema)