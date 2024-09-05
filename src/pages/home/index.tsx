import { FunctionComponent } from "react";
import Banner from "./_components/banner";
import before from '../../assets/before.webp'
import VideoBanner from "./_components/video";
interface HomeProps {
    
}
 
const Home: FunctionComponent<HomeProps> = () => {
    return ( <div>
        <Banner/>

        <div className=" bg-white">
            <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <div className=" text-primary">
                            <h4 className=" text-4xl font-semibold">No more boring  and ineffective  reports! </h4>
                            <p className=" mt-10">I will teach you how to create Power BI reports that not only have a great design, but are effective at answering the right business questions.</p>
                        </div>
                        <div><img src={before} className=" w-full" alt="" /></div>
                    </div>
            </div>
        </div>

        <VideoBanner/>
    </div> );
}
 
export default Home;