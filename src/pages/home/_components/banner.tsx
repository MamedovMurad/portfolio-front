import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { admin_file } from "../../../helpers/api";
interface BannerProps {
data:any
}

const Banner: FunctionComponent<BannerProps> = ({data}) => {
    return (<div className=" bg-text-primary text-primary">
        <div className=" md:flex justify-between container mx-auto md:pt-14 pt-5 md:px-0 px-4">
            <div className=" md:pb-14 pb-3">
                <h4 className=" md:text-5xl text-2xl font-semibold md:w-7/12 w-full ">{data?.title}</h4>
                <p className="  md:my-10 my-3 md:w-5/12 md:text-base text-base">
                    {data?.description}</p>

                    <Link to={'/pricing'} className=" bg-primary text-white block font-semibold w-6/12 py-2 text-center rounded "> Explorer courses</Link>
            </div>
            <div className=" flex md:block justify-end">
                <img src={admin_file+data?.image} className=" md:w-[600px] w-52" alt="" />
            </div>
        </div>
    </div>);
}

export default Banner;