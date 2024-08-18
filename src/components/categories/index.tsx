import { FunctionComponent } from "react";
import CategoryItem from "./category";

interface CategoriesProps {
    
}
 
const Categories: FunctionComponent<CategoriesProps> = () => {
    return ( 
        <div className="flex gap-x-3">
            <CategoryItem title="All"/>
            <CategoryItem title="Power BI"/>
            <CategoryItem title="Excel"/>
         
        </div>
     );
}
 
export default Categories;