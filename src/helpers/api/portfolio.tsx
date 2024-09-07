import { api } from "."

const getList = (params: { limit: number, offset: number, isActive?:boolean ,category_id?:string|number }) => {
    return api.get(`portfolios?category_id=${(params?.category_id||"")}&limit=${params.limit}&offset=${params.offset}`)
}
const show = (params: { id:string}) => {
    return api.get(`portfolios/`+params.id)
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
