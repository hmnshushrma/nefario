import Axios from 'axios'

const getProductCallApi = () => {
  return Axios.get(process.env.API_URL + process.env.PRODUCT_ITEMS)
    .then(responseArr => responseArr.data)
    .catch(err => console.error(err))
}

export default getProductCallApi
