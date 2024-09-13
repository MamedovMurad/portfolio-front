import { FunctionComponent, useEffect, useState } from "react";
import { CarouselUI } from "../../components/carousel";
import Card from "./_components/card";
import Categories from "../../components/categories";

import { getList } from "../../helpers/api/portfolio";
import { file_url } from "../../helpers/api";
import { LoadingOverlay } from "@mantine/core";
interface PortfolioListProps {

}

const PortfolioList: FunctionComponent<PortfolioListProps> = () => {
    const [list, setlist]=useState<any>(null)
    const [current, setcurrent] = useState<any>(null);
    useEffect(() => {
        setlist(null)
        getList({limit:10,category_id:current, offset:10}).then((data)=>{
            setlist(data?.data?.data)
        })
    }, [current]);


    
    return (<div className=" container mx-auto pt-10">
        <CarouselUI />
        <h4 className=" text-center my-10 font-semibold text-4xl text-text-primary">Members Portfolios</h4>
        <div className=" mb-5">
            <Categories callback={setcurrent} current={current}/>
        </div>
<div className=" relative min-h-80 grid  md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-center items-center gap-4">

{list?.map((item:any)=>(
    <Card title={item.title} author_img={item?.author?.image} img={file_url+item.cover_img} author_name={item?.author?.name} id={item.id}/>
))}


<LoadingOverlay
          visible={!list}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2, backgroundOpacity:0.1 }}
          loaderProps={{ color: 'pink', type: 'bars' }}
        />
</div>

    </div>);
}

export default PortfolioList;