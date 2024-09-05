import { FunctionComponent } from "react";
import tick from '../../../assets/tick.svg'
import { Link } from "react-router-dom";
interface videoBannerProps {

}

const VideoBanner: FunctionComponent<videoBannerProps> = () => {
    return (<div className=" bg-text-primary py-20">
        <div className="container mx-auto h-full">
            <div className="flex items-center justify-center  gap-x-4 h-80">
                <div className=" h-full w-5/12">
                    <iframe src="https://www.youtube.com/embed/zaFTAT6_jCs?autoplay=0&mute=0&controls=1&loop=0&origin=https%3A%2F%2Fwww.datapears.com&playsinline=1&enablejsapi=1&widgetid=1"
                        className=" w-full h-full"></iframe>
                </div>

                <div className=" w-5/12 text-primary font-semibold h-full ">
                    <ul className=" flex flex-col justify-between h-full ">
                        <li className=" flex gap-x-2">
                            <img width={20} src={tick} alt="" />
                            <p>Gain confidence using data visualization built-in tools and techniques in Power BI</p>
                        </li>
                        <li className=" flex gap-x-2">
                            <img width={20} src={tick} alt="" />
                            <p>Gain confidence using data visualization built-in tools and techniques in Power BI</p>
                        </li>
                        <li className=" flex gap-x-2">
                            <img width={20} src={tick} alt="" />
                            <p>Gain confidence using data visualization built-in tools and techniques in Power BI</p>
                        </li>
                    
                     
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