import axios from 'axios'


export default {
    namespace: 'cinema',
    state: {
        list: []
    },
    // 异步方法
    effects: {
        *getList(action: any, obj: any): any {
            const { call, put } = obj
            const { cityID } = action.payload
            var res = yield call(getListForCinema, cityID)

            yield put({
                type: 'changeList',
                payload: res
            })
        },
    },
    // 同步方法
    reducers: {
        changeList(state: any, action: any) {
            const { payload } = action
            return { ...state, list: payload }
        },
        clearList(state: any, action: any) {
            return { ...state, list: [] }
        }
    }
}

async function getListForCinema(cityID: any) {
    console.log(cityID)
    var res = await axios.get(`https://m.maizuo.com/gateway?cityId=${cityID}&ticketFlag=1&k=3005575`, {
        headers: {
            'x-client-info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1785052008255035158036481","bc":"210300"}',
            'x-host': 'mall.film-ticket.cinema.list'
        }
    }).then(res => res.data.data.cinemas)
    console.log(res)
    return res
}