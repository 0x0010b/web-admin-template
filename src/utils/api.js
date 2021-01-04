import axios from 'axios'

function post(url, data) {
    return new Promise((resolve, reject) => {
        let headers = { 'Content-type': 'application/json;charset=utf-8' }
        axios.post(url, data, { headers: headers }).then(resp => {
            if (resp.data.success) {
                resolve(resp.data.body)
            } else {
                reject(resp.data.errorMessage)
            }
        }).catch((error) => {
            reject(error.response.status + ' ' + error.response.statusText)
        })
    })
}

export default { post }