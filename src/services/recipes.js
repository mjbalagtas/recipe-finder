import axios from 'axios'
const baseUrl = 'http://localhost:5000/api/recipes'

const getTopList = async (newObject) => {
  const request = await axios.post(baseUrl, newObject)
  return request.data
}

const services = {getTopList}

export default services