import React from 'react'
import _ from 'lodash';
import { FaHeart } from 'react-icons/fa'
import "../App.scss"

const Button = ({favorites, handleFavoriteFilter}) => {
  const status = _.isEmpty(favorites) ? "my-fave icon left" : "my-fave icon active left";
  const buttonClass = !_.isEmpty(favorites) ? "my-faves filter-active" : "my-faves";
  return(
        <button className={buttonClass} onClick={handleFavoriteFilter}>
            <FaHeart className={status}></FaHeart>
            My Faves
          </button>
)
  }
export default Button;

