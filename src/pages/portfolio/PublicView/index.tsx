import { FunctionComponent, useEffect, useState } from "react";

import { show } from "../../../helpers/api/portfolio";
import { useParams, useSearchParams } from 'react-router-dom';
import { admin_file, file_url } from "../../../helpers/api";
import { LoadingOverlay } from "@mantine/core";
import Card from "../_components/card";
import { ShowCerticate } from "../../../components/modal/showCertificate";
import dayjs from "dayjs";


interface PubcliViewProps {

}

const PubcliView: FunctionComponent<PubcliViewProps> = () => {
    const location = useParams()
    console.log(location);


  

    const [data, setdata] = useState<any>(null);
    const [page, setpage] = useState(1);


    useEffect(() => {
        show({ id: location?.id ?? "0" }).then((data: any) => {
            setdata(data?.data);
            window.scrollTo(0, 0);
        })



    }, [location?.id]);


    
    const [searchParams,setSearchParams] = useSearchParams();
    const src =  searchParams.get("item")
    const deleteSrc = ()=>{
        searchParams.delete("item")
        setSearchParams(searchParams);
    }
    const addSrc=(value:string)=>{
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set("item",value)
     
        setSearchParams(newSearchParams)
    }

    return (<section className=" h-full w-full">
        <div className="container mx-auto py-10 h-full">

            <div className=" w-full h-full" >
                {
                    // isiframe ? 
                    <iframe  allowFullScreen src={data?.link} height={"100%"} width={"100%"} className=" w-full m-0 p-0 overflow-x-hidden md:h-[500px] lg:h-[630px] xl:h-[777px] 2xl:h-[910px] h-[290px]"></iframe>
                        // : <a href="#"
                        //     className=" block w-full   xl:h-[777px] md:h-[500px] bg-contain  bg-no-repeat h-[400px] 2xl:h-[910px] "
                        //     style={{ backgroundImage: `url(${file_url + data?.cover_img})` }}>

                        // </a>
                }


            </div>

            <div >
                <h4 className=" text-3xl font-semibold text-center my-10 ">{data?.title}</h4>

                <p>{data?.desc}</p>
            </div>
            <div className=" mt-10">
                {/* <h4 className=" text-3xl font-semibold text-center my-10 ">Other Portfolios</h4> */}
                <div className=" relative min-h-80 grid  md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-center items-center gap-4">

                    {data?.other_portfolios?.data?.map((item: any) => (
                        <Card is_like={item?.is_like} key={item?.id} author_img={item?.author?.image} title={item.title} img={file_url + item.cover_img} author_name={item?.author?.name} id={item.id} />
                    ))}


                    <LoadingOverlay
                        visible={!data?.other_portfolios}
                        zIndex={1000}
                        overlayProps={{ radius: 'sm', blur: 2, backgroundOpacity: 0.1 }}
                        loaderProps={{ color: 'pink', type: 'bars' }}

                    />
                </div>
            </div>

            <div className=" mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data?.certificates?.map((certificate: any) => (
                    <div  key={certificate.id}
                    onClick={()=>addSrc(admin_file + certificate?.pdf)} className="bg-primary border shadow-md rounded-lg overflow-hidden relative">
                        <img src={admin_file +"/uploads/"+ certificate?.image} className="w-full h-full object-cover" />
                        <div className="p-2 absolute bottom-0 left-0 shadow-md bg-white">
                            {/* <h2 className="text-xl font-semibold mb-2">{certificate.name}</h2> */}
                            <p className="text-gray-600 mb-1">Author: {certificate?.author_name}</p>
                            <p className="text-gray-500">Date of Certificate: {dayjs(certificate.created_at + "").format("DD/MM/YY")}</p>
                            {/* <div className="mt-4">
                                <Link target="_blank" to={admin_file + certificate?.pdf} className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded">
                                    View Certificate
                                </Link>
                            </div> */}
                        </div>
                    </div>
                ))}

                <LoadingOverlay
                    visible={!data?.certificates}
                    zIndex={1000}
                    overlayProps={{ radius: 'sm', blur: 2, backgroundOpacity: 0.1 }}
                    loaderProps={{ color: 'pink', type: 'bars' }}
                />
            </div>

            <div className={" text-center w-full  mt-2 hidden"}>
            <button onClick={() => setpage(page + 1)} className=" bg-text-primary text-primary font-semibold text-lg py-2 px-5 rounded-md ">See More</button>
      
            </div>
        </div>

        </div>
        <ShowCerticate src={src||undefined} deleteSrc={deleteSrc}/>
    </section>)
}

export default PubcliView;