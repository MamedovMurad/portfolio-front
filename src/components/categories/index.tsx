import { FunctionComponent, useEffect, useState } from "react";
import CategoryItem from "./category";
import { api } from "../../helpers/api";

interface CategoriesProps {
    callback:(id:string|number)=>void,
    current:string|number
}
 
const Categories: FunctionComponent<CategoriesProps> = ({callback,current}) => {
    const [categories, setcategories] = useState<any>(null);

    
    useEffect(() => {
        api.get('categories').then((data)=>{
            setcategories(data?.data)
        })
    }, []);
    return ( 
        <div className="flex gap-x-3">
            <CategoryItem id={""} active={current==null||current==""} callback={()=>callback("")} title="All"/>
            {
                categories?.map((item:any)=>(
                    <CategoryItem id={item.id} active={current==item.id} callback={(id)=>callback(id)} key={item.id} title={item.title}/>
                ))
            }
           
           
         
         
        </div>
     );
}
 
export default Categories;