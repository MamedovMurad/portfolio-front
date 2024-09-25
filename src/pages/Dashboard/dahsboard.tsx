import {  LoadingOverlay } from "@mantine/core";
import { FunctionComponent, useEffect, useState } from "react";
import { api, file_url } from "../../helpers/api";
import Card from "../portfolio/_components/card";
import { EditModal } from "../../components/modal";

interface DashboardIndexProps {
    
}
 
const DashboardIndex: FunctionComponent<DashboardIndexProps> = () => {
    const [list, setlist] = useState<any>(null);
const [isOpen, setisOpen] = useState({id:0,link:""});
    function getList(){
        api.get("user-portfolios").then((data)=>{
            setlist(data?.data?.data)
        })
    }
    useEffect(() => {
        getList()
    }, []);

    function deleteItem(id:string|number){
        api.delete("portfolios/"+id).then(()=>{
            getList()
        })
    }
   
    return ( <div>

        


<div className=" relative mt-6 min-h-80 grid  md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-center items-center gap-4">
<EditModal isOpen={isOpen.id} link={isOpen.link} closeParent={()=>{setisOpen({id:0,link:""}); getList()}} />
{list?.map((item:any)=>(
    <Card 
    callBack={()=>getList()}
    deleteItem={()=>deleteItem(item.id)}
    editItem={()=>{setisOpen({id:item.id, link:item?.link||""})}}
    author_img={item?.author?.image} key={item.id} title={item.title} img={file_url+item.cover_img+''} is_like={item?.is_like} author_name={item?.author?.name} id={item.id}/>
))}


<LoadingOverlay
          visible={!list}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2, backgroundOpacity:0.1 }}
          loaderProps={{ color: 'pink', type: 'bars' }}
        />
</div>
    </div> );
}
 
export default DashboardIndex;