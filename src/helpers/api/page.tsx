import { api } from "."

const getabout = () => {
    return api.get(`about`)
}
const getpricing = () => {
    return api.get(`prices`)
}

const getcontact = () => {
    return api.get(`contact`)
}
export {
  getabout,
getpricing,
getcontact
   
}
