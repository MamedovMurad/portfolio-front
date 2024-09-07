import { FunctionComponent, useEffect, useState } from "react";

import { show } from "../../../helpers/api/portfolio";
import { useParams } from 'react-router-dom';
import { file_url } from "../../../helpers/api";
import { LoadingOverlay } from "@mantine/core";
import Card from "../_components/card";


interface PubcliViewProps {

}

const PubcliView: FunctionComponent<PubcliViewProps> = () => {
    const location = useParams()
    console.log(location);


    const [isiframe, setisiframe] = useState(false);

    const [data, setdata] = useState<any>(null);

    useEffect(() => {
        show({ id: location?.id ?? "0" }).then((data: any) => {
            setdata(data?.data)
        })



    }, []);


    console.log(data, 'data');


    return (<section className=" h-full w-full">
        <div className="container mx-auto py-10 h-full">

            <div className=" w-full h-full" onClick={() => setisiframe(!isiframe)}>
                {
                    isiframe ? <iframe  allowFullScreen src={data?.link} height={"100%"} width={"100%"} className=" w-full m-0 p-0 overflow-x-hidden md:h-[500px] lg:h-[630px] xl:h-[777px] 2xl:h-[910px] h-[290px]"></iframe>
                        : <a href="#"
                            className=" block w-full   xl:h-[777px] md:h-[500px] bg-contain  bg-no-repeat h-[400px] 2xl:h-[910px] "
                            style={{ backgroundImage: `url(${file_url + data?.cover_img})` }}>

                        </a>
                }


            </div>

            <div >
                <h4 className=" text-3xl font-semibold text-center my-10 ">{data?.title}</h4>

                <p>{data?.desc}</p>
            </div>
            <div>
                <h4 className=" text-3xl font-semibold text-center my-10 ">Other Portfolios</h4>
                <div className=" relative min-h-80 grid  md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-center items-center gap-4">

                    {data?.other_portfolios?.data?.map((item: any) => (
                        <Card title={item.title} img={file_url + item.cover_img} author_name={item?.author?.name} id={item.id} />
                    ))}


                    <LoadingOverlay
                        visible={!data?.other_portfolios}
                        zIndex={1000}
                        overlayProps={{ radius: 'sm', blur: 2, backgroundOpacity: 0.1 }}
                        loaderProps={{ color: 'pink', type: 'bars' }}
                    />
                </div>
            </div>
        </div>
    </section>);
}

export default PubcliView;