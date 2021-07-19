import {useState, useEffect} from 'react';
import { FaRegHeart, FaRegClock } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { sayTheTimeDiff } from './helpers/date'
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import SortSelect from './components/SortSelect';
import { fetchProducts } from './api/products'
import "./App.scss";
const sortOptions = ['popularity', 'recent'];
function App() {
  const [faves, setFaves] = useState([]);
  const [faveResults, getFaveResults] = useState([]);
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState('')

  // To-do: pass in a handleFavorites handler to the pass into the products container for the each Card Header


  // pass in the fetch handler to fetch documents from the API:
useEffect(() => {
  fetchProducts(sortBy)
  .then((productData)=>{
    console.log(sortBy ,'updating products...')
    setProducts(prevProducts => {
      return [...productData.data]
    })
  })
}, [sortBy]);


const handleSortUpdate = (value) => {
  setSortBy(value)
}

const returnRandomDiscount = () => {
  const discounts = ['Special', 'Daily', 'Happy Hour'];
  return discounts[Math.floor(Math.random() * discounts.length)];
}
  return (
    <div className="App">
      <NavBar/>

      <div className="app">
        <SearchBar/>
        <SortSelect options={sortOptions} default="popularity" handleSelect={handleSortUpdate}/>

        {/* START PRODUCT CONTAINER */}
        <div className="product-card-container">
{
  products.map(({_id, itemName, restaurant, lastOrderedAt, productPrice, discountDecimal, orders}, i) => (


    <div className="trending-item-row" key={i}>


    <div className="trending-item-card">


      <div className="product-card-header-row">
        <div className="product-card-item-name">
          <h3 className="item-name">{itemName}</h3>
        </div>
        <div className="card-fave-heart">

          <FaRegHeart className="fave-icon icon"></FaRegHeart>

        </div>
      </div>



      <div className="product-card-content-row">


        <div className="restaurant-details-row card-row">
          <p className="restaurant-name">
            {restaurant} &#8226; 0.5mi
          </p>
        </div>
        {/* END of Card Content Row */}

        {/* START of Card Content Row */}
        <div className="pricing-details-row card-row">
          <p className="price">${productPrice.toFixed(2)} </p>

          <p><span className="discount-price">
            ${(productPrice * discountDecimal).toFixed(2)} &#8226; {returnRandomDiscount()}
          </span></p>
        </div>
        {/* END of Card Content Row */}

        {/* START of Card Content Row  */}
        <div className="meta-data-row card-row">
          <div className="recent-orders metadata-pill pill">

            <BiUserCircle className="icon"></BiUserCircle>

            <p className="recent-orders">
              <span className="orders-count"></span>{orders.length} recent orders
            </p>
          </div>
          <div className="time-ordered metadata-pill pill">

            <FaRegClock className="icon"></FaRegClock>

            <p className="time-ordered">
              <span className="time-ago">{sayTheTimeDiff(lastOrderedAt)}</span>
            </p>
          </div>
        </div>


      </div>


    </div>


  </div>

  ))
}


        </div>
        {/* PRODUCT CONTAINER END */}

      </div>
      {/* END of app */}

    </div>
    // END of App
  );
}

export default App;
