import { api } from "."

const getList = (params: { limit: number, offset: number, isActive?:boolean }) => {
    return api.get(`portfolios?limit=${params.limit}&offset=${params.offset}`, params)
}
const show = (params: { id:string}) => {
    return api.get(`portfolios/`+params.id, params)
}
const create = (params:any)=>{
    console.log(params);
    
    return api.postWithFormData('portfolios', params)
    }
    const remove = (params:{id:number})=>{
        return api.delete("roles/"+params.id)
    }
    const update =(params:{name:string, privilegeLabels:string[], id?:number})=>{
        return api.put('roles/'+params.id, params)
    }
export {
    getList,
    create,
    show,
    update,
    remove
   
}
