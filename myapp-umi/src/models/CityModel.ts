export default {
    namespace: 'city',
    state: {
        cityName: '深圳',
        cityID: 440300
    },
    reducers: {
        changeCity(state: any, action: any) {
            const { payload } = action
            console.log(payload)
            return { ...state, cityName: payload.cityName, cityID: payload.cityID }
        }
    },
}