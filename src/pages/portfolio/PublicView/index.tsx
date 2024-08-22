import { FunctionComponent, useEffect, useState } from "react";

import { show } from "../../../helpers/api/portfolio";
import { useParams } from 'react-router-dom';
import { file_url } from "../../../helpers/api";


interface PubcliViewProps {
    
}
 
const PubcliView: FunctionComponent<PubcliViewProps> = () => {
const location = useParams()
console.log(location);


    const [isiframe, setisiframe] = useState(false);
    const [data, setdata] = useState<any>(null);

    useEffect(() => {
        show({id:location?.id??"0"}).then((data:any)=>{
            setdata(data?.data)
        })
    }, []);
console.log(data);


    return ( <section className=" h-full w-full">
        <div className="container mx-auto py-10 h-full">

            <div className=" w-full h-full" onClick={()=>setisiframe(!isiframe)}>
                {
                    isiframe?                <iframe src={data?.link} className=" w-full md:h-[690px]"></iframe>
                    :  <a href="#" 
                    className=" block w-full md:h-[690px] bg-contain  bg-no-repeat "
                     style={{backgroundImage:`url(${file_url+ data?.cover_img})`}}>
   
                   </a>
                }
              

            </div>

            <div >
                <h4 className=" text-3xl font-semibold text-center my-10 ">{data?.title}</h4>

                <p>{data?.desc}</p>
            </div>
        </div>
    </section> );
}
 
export default PubcliView;