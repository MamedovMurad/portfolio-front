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
const getsliders = () => {
    return api.get(`sliders`)
}
export {
  getabout,
getpricing,
getcontact,
getsliders
   
}
