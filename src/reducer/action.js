import { LOGGEN_IN, LOGGEN_OUT } from "./type"

export const logInAction = e => {
    return {
        type: LOGGEN_IN
    }
}
export const logOutAction = e => {
    return {
        type: LOGGEN_OUT
    }
}