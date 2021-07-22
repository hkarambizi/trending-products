import Button from './Button'
import Title from './Title'

const NavBar = ({favorites, faveFilterHandler}) => (
    <div className="nav">
        <Title page="trending"/>
        <div className="nav-faves">
          <Button favorites={favorites} handleFavoriteFilter={faveFilterHandler} />
        </div>
      </div>
)

export default NavBar;
