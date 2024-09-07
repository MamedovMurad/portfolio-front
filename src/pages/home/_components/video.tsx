import { FunctionComponent } from "react";
import tick from '../../../assets/tick.svg'
import { Link } from "react-router-dom";
interface videoBannerProps {
data?:any
}

const VideoBanner: FunctionComponent<videoBannerProps> = ({data}) => {
    return (<div className=" bg-text-primary md:py-20 py-10">
        <div className="container mx-auto md:h-full">
            <div className="md:flex items-center justify-center  gap-x-4 md:h-80">
                <div className=" h-full md:w-5/12 w-full px-4 md:px-0">
                    <iframe src={data?.youtube_link}
                        className=" w-full h-full"></iframe>
                </div>

                <div className=" md:w-5/12 text-primary font-semibold md:h-full md:mt-0 mt-10 px-4 md:px-0 ">
                    <ul className=" flex flex-col justify-between md:h-full gap-y-4 md:gap-y-0 ">
                     {
                        data?.video_texts?.map((item:any)=>(
                            <li className=" flex gap-x-2">
                            <img width={20} src={tick} alt="" />
                            <p>{item.text}</p>
                        </li>
                        ))
                     }
                   
            
                    
                     
                        <li className=" flex justify-center">
                        <Link to={'/pricing'} className=" bg-primary text-white block font-semibold w-6/12 py-2 text-center rounded "> Explorer courses</Link>

                        </li>
                        </ul>

                        </div>
            </div>
        </div>
    </div>);
}

export default VideoBanner;