import React from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import '../App.scss';

const CardHeader = ({itemName, faves, id, handleClick}) => {
    const faved = !!faves[id];
    const emptyHeartClassName = faved ? "inactive icon" : "active con";
    const filledHeartClassName = faved ? "active icon" : "inactive icon";

    return (
        <div className="product-card-header-row">
        <div className="product-card-item-name">
          <h3 className="item-name">{itemName}</h3>
        </div>
        <div className="card-fave-heart" onClick={(e)=> handleClick(faved, id)}>

          <FaRegHeart className={emptyHeartClassName}></FaRegHeart><FaHeart className={filledHeartClassName}></FaHeart>

        </div>
      </div>
    )
}
export default CardHeader;
