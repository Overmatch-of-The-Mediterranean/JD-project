import axios from 'axios'
export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
      baseURL: 'https://www.fastmock.site/mock/e85283acd24926300e4c1ced32faffa5/weixin',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}
