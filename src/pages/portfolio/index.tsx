import { FunctionComponent } from "react";
import { CarouselUI } from "../../components/carousel";
import Card from "./_components/card";
import Categories from "../../components/categories";
import member from "../../assets/member.png"
interface PortfolioListProps {

}

const PortfolioList: FunctionComponent<PortfolioListProps> = () => {
    return (<div className=" container mx-auto pt-10">
        <CarouselUI />
        <h4 className=" text-center my-10 font-semibold text-4xl text-text-primary">Members Portfolios</h4>
        <div className=" mb-5">
            <Categories/>
        </div>
<div className=" grid  md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-center items-center gap-4">

<Card/>
<Card img={member}/>
<Card/>
<Card/>
<Card/>
<Card/>

</div>

    </div>);
}

export default PortfolioList;