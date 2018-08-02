import axios from 'axios'
// "lint": "eslint --ext .js,.vue src",
export default function (path, data = {}, type = 'GET') {

  return new Promise((resolve, reject) => {
    let promise = null
    if (type === 'GET') {
      let queryStr = ''
      Object.keys(data).forEach((key) => {
        queryStr += key + '=' +data[key] + '&'
      })
      if(queryStr){
        queryStr = '?' + queryStr.substring(0,queryStr.length-1)
      }
      promise =  axios.get(path + queryStr)
    } else {
       promise = axios.post(path, data)
    }
    promise.then(response => {
      resolve(response.data)
    }).catch(err => {
      reject(err);
    })
  })
}
