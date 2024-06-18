import { LOGGEN_IN, LOGGEN_OUT } from "./type"
const tokens = JSON.parse(localStorage.getItem('token'))
export const tokenInitialState = {
    token: tokens || false
}
export const tokenReducer = (state, action) => {
    switch (action.type) {
        case LOGGEN_IN:
            return (state = {
                token: true
            })
        case LOGGEN_OUT:
            return (state = {
                token: false
            })
        default:
            return state
    }
}