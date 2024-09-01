import { FunctionComponent } from "react";
import share from "../../../assets/share.png"
import user from "../../../assets/user.jpg"
import project from "../../../assets/project.png"
import { IconHeart } from '@tabler/icons-react';
import { Link } from "react-router-dom";
interface CardProps {
img?:any,
title:any,
id:any
author_name:any
}

const Card: FunctionComponent<CardProps> = ({img, title, author_name,id}) => {
  return (<div
    className="block  rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
    <div className="relative overflow-hidden bg-cover bg-no-repeat">
      <img
        className="rounded-t-lg h-60 w-full object-cover"
        src={img??project}
        alt="" />
    </div>
    <div className="p-3 bg-dark">
      <div className="flex justify-between items-center mb-1">
        <h5>{title}</h5>
        <span><img src={share} width={15} alt="" /></span>
      </div>
      <div className=" flex justify-between items-center">
        <div className=" flex items-center gap-x-1">
          <span className=" overflow-hidden rounded-full ">
            <img src={img??user} alt="" width={27}  className=" object-cover h-7"/></span>
            <Link to={"/portfolios/"+id}>
            <p className=" font-semibold"> <i className=" text-xs font-light">by</i> {author_name}</p>
            </Link>
      
        </div>
        <div>
          <IconHeart/>
        </div>
      </div>
    </div>
  </div>);
}

export default Card;