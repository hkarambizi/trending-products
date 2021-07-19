import React from 'react'
import { FaHeart } from 'react-icons/fa'
import "../App.scss"

const Button = ({}) => (
        <button className="my-faves">
            <FaHeart className="my-fave icon left"></FaHeart>
            My Faves
          </button>
)
export default Button;
