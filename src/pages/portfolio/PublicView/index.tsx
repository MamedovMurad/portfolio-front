import { FunctionComponent } from "react";
import member from '../../../assets/member.png'
interface PubcliViewProps {
    
}
 
const PubcliView: FunctionComponent<PubcliViewProps> = () => {
    return ( <section className=" h-full w-full">
        <div className="container mx-auto py-10 h-full">

            <div className=" w-full h-full">
                <a href="https://app.powerbi.com/view?r=eyJrIjoiN2ZmZjZjNWQtZmRkYS00YjNmLTgxNzUtODBjYTQ4MDU0NWVkIiwidCI6ImRlMjBiZTlmLWIxNjgtNDUyMC1hYjg1LTFkMTQwZmU1YzQ3NiIsImMiOjl9" target="_blank"
                 className=" block w-full md:h-[690px] bg-contain  bg-no-repeat "
                  style={{backgroundImage:`url(${member})`}}>

                </a>
            </div>

            <div >
                <h4 className=" text-3xl font-semibold text-center my-10 ">Project Overview</h4>

                <p>The project aims to gain insights into the Olist e-commerce platform by analyzing sales data and customer reviews to enhance product offerings, optimize marketing strategies, and improve overall user experience through data visualization. <br /> <br />
                olist_orders.csv - This file contains the basic details of customer orders with the following columns: Order ID, Customer ID, Order Status, Order Purchase Timestamp, Order Approved Timestamp, Order Delivered Timestamp, Shipping Limit Date, Price, Freight Value, and Payment Method.</p>
            </div>
        </div>
    </section> );
}
 
export default PubcliView;