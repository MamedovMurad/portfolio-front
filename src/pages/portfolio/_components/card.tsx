import { FunctionComponent } from "react";
import share from "../../../assets/share.png"
import project from "../../../assets/project.png"
import { IconHeart } from '@tabler/icons-react';
import { Link, useNavigate } from "react-router-dom";
import { BurgerMenuPortfolio } from "../../../components/burger/action";
import { useStore } from "../../../store/aut";
import { api } from "../../../helpers/api";
import { notifications } from "@mantine/notifications";
interface CardProps {
img?:any,
title:any,
id:any
author_name:any,
author_img?:string;
deleteItem?:any;
editItem?:any;
is_like:0|1,
callBack?:()=>void
}

const Card: FunctionComponent<CardProps> = ({img, title, author_name,id, author_img, deleteItem,is_like,callBack,editItem}) => {
  const { user } = useStore((state) => ({
    user: state.user,

}));
  const navigate = useNavigate()
  
  function clickLike(){

    if (!user) {
      return navigate('/login')
    }
  
    api.post("like",{id}).then(()=>{
      notifications.show({
        title: is_like?"Portfolio unliked successfully !":'Portfolio liked successfully !',
        message: '',
        })

        callBack&&callBack();
    })
  }
  return (<div
  onClick={()=>navigate("/portfolios/"+id)}
    className="block relative cursor-pointer  rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
      {
        deleteItem&& <div onClick={(e)=>e.stopPropagation()} className=" absolute right-1 top-1 z-[1] ">
        
          <BurgerMenuPortfolio  deleteItem={deleteItem} editItem={editItem}/>
          </div>
      }
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
   {
    author_img&&       <span className=" overflow-hidden rounded-full ">
            <img src={author_img} alt="" width={27}  className=" object-cover h-7"/></span>
   }
            <Link to={"/portfolios/"+id}>
            <p className=" font-semibold"> <i className=" text-xs font-light">by</i> {author_name}</p>
            </Link>
      
        </div>
        <div>
          <IconHeart fill={is_like?"red":""} onClick={(e)=>{e.stopPropagation();clickLike()}}/>
        </div>
      </div>
    </div>
  </div>);
}

export default Card;