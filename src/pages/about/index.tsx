import { FunctionComponent, useEffect, useState } from "react";
import { getabout } from "../../helpers/api/page";
import { admin_file } from "../../helpers/api";

interface AboutProps {
    
}
 
const About: FunctionComponent<AboutProps> = () => {
    const [data, setdata] = useState<any>(null);

    useEffect(() => {
        getabout().then((data)=>{
            setdata(data?.data)
        })
    }, []);
    return ( 
        <section className="bg-gray-100">
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{data?.title}</h2>
                <p className="mt-4 text-gray-600 text-lg" dangerouslySetInnerHTML={{__html: data?.description}}></p>
                <div className="mt-8">
                    {/* <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
                        <span className="ml-2">&#8594;</span></a> */}
                </div>
            </div>
            <div className="mt-12 md:mt-0">
               {
                data?.image&& <img src={admin_file+data?.image} alt="About Us Image" className="object-cover rounded-lg shadow-md" />
               }
            </div>
        </div>
    </div>
</section>
     );
}
 
export default About;