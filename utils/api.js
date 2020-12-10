import axios from 'axios'

export const geolocation = (method = 'GET') => {
    return axios({
        method: method,
        url: `https://geolocation-db.com/json/`
    }).catch(err => {
        console.log(err);
    })
}