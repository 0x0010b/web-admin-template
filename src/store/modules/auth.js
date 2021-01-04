import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_LOGOUT } from '@/store/types/auth-types'
import api from '@/utils/api'

export default {
    state: {
        token: localStorage.getItem("user-token") || ""
    },
    mutations: {
        [AUTH_SUCCESS] (state, data) {
            state.token = data.token || "" //TODO: Update
            localStorage.setItem("user-token", state.token)
        },
        [AUTH_LOGOUT] (state) {
            state.token = ""
            localStorage.removeItem("user-token")
        }
    },
    actions: {
        [AUTH_REQUEST] ({commit}, payload) {
            return new Promise((resolve, reject) => {
                api.post('api/login', { user: payload.user, password: payload.password }).then((data) => {
                    commit(AUTH_SUCCESS, data)
                    resolve(data)
                }, (err) => {
                    reject(err)
                })
            })
        }
    }
}