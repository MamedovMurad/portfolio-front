import { FunctionComponent, useEffect, useState } from "react";
import Banner from "./_components/banner";
import VideoBanner from "./_components/video";
import { admin_file, api } from "../../helpers/api";
import { LoadingOverlay } from "@mantine/core";
interface HomeProps {
    
}
 
const Home: FunctionComponent<HomeProps> = () => {
    const [banner, setbanner] = useState<any>(null);
    const [before, setbefore] = useState<any>(null);
    const [video, setvideo] = useState<any>(null);
    const [loading, setloading] = useState(false);
    useEffect(() => {
        setloading(true)
        api.get("banner").then((data)=>{
            setbanner(data?.data)
        }).finally(()=>{
            setloading(false)
        })

        api.get("before-after").then((data)=>{
            setbefore(data?.data)
        })
        api.get("video").then((data)=>{
            setvideo(data?.data)
        })
    }, []);
    return ( 
    <>
    {
        loading?<LoadingOverlay
        visible={loading}
        zIndex={1000}
        overlayProps={{ radius: 'sm', blur: 2, backgroundOpacity:0.1 }}
        loaderProps={{ color: 'pink', type: 'bars' }}
      />:
        <div>
        <Banner data={banner} />

        <div className=" bg-white pt-4 md:pt-0 ">
            <div className="container mx-auto">
                    <div className="md:flex justify-between items-center px-4 md:px-0">
                        <div className=" text-primary">
                            <h4 className=" md:text-4xl text-2xl font-semibold">{before?.title}</h4>
                            <p className=" md:mt-10 mt-5">{before?.description}</p>
                        </div>
                        <div><img src={admin_file+before?.image} className=" w-full" alt="" /></div>
                    </div>
            </div>
        </div>

        <VideoBanner data={video}/>
    </div> 
    }
  
    
    </>);
}
 
export default Home;