import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../../assets/banner.webp"
interface BannerProps {

}

const Banner: FunctionComponent<BannerProps> = () => {
    return (<div className=" bg-text-primary text-primary">
        <div className="flex justify-between container mx-auto pt-14">
            <div className=" pb-14">
                <h4 className=" text-5xl font-semibold">From boring to brilliant: <br />  create incredible Power <br /> BI reports</h4>
                <p className=" font-semibold my-10">
                    From boring to brilliant: create incredible Power BI reports <br />
                    Create showstopping reports that will wow your audience!</p>

                    <Link to={'/pricing'} className=" bg-primary text-white block font-semibold w-6/12 py-2 text-center rounded "> Explorer courses</Link>
            </div>
            <div>
                <img src={bannerImg} className=" w-96" alt="" />
            </div>
        </div>
    </div>);
}

export default Banner;