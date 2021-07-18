import React from 'react';
import Button from './Button'
import Title from './Title'
import "../App.scss";

const NavBar = () => (
    <div className="nav">
        <Title page="trending"/>
        <div className="nav-faves">
          <Button/>
        </div>
      </div>
)

export default NavBar;
