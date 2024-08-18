import { FunctionComponent } from "react";

interface CategoryItemProps {
    title:string
}
 
const CategoryItem: FunctionComponent<CategoryItemProps> = ({title}) => {
    return (<div className=" group cursor-pointer md:w-[200px] h-8 rounded-lg bg-dark hover:bg-text-primary transition-colors hover flex justify-center items-center">
<p className=" group-hover:text-primary font-semibold text-xl text-text-primary">{title}</p>
    </div>  );
}
 
export default CategoryItem;