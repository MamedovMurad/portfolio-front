import { FunctionComponent } from "react";

interface CategoryItemProps {
    title:string,
    active?:boolean,
    id:number|string,
    callback:(id:string|number)=>void
}
 
const CategoryItem: FunctionComponent<CategoryItemProps> = ({title,active, id, callback}) => {
    return (<div onClick={()=>callback(id)} className={" group cursor-pointer md:w-[200px] h-8 rounded-lg  hover:bg-text-primary transition-colors hover flex justify-center items-center " +(active?"bg-text-primary" :"bg-dark")}>
<p className={" group-hover:text-primary font-semibold text-xl  "+ (active?"text-primary" :"text-text-primary")}>{title}</p>
    </div>  );
}
 
export default CategoryItem;