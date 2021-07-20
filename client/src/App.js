import {useState, useEffect} from 'react';
import _ from 'lodash';
import { FaRegClock } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { sayTheTimeDiff } from './helpers/date';
import { returnBoolean, returnSearchMatches, showFavorites } from './helpers/productHelpers'
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import SortSelect from './components/SortSelect';
import CardHeader from './components/CardHeader';
import { fetchProducts } from './api/products'
import "./App.scss";
const sortOptions = ['popularity', 'recent'];
function App() {
  const [faves, setFaves] = useState({});
  const [faveResults, setFaveResults] = useState([]);
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState('')
  const [filterFn, setFilterFn] = useState([returnBoolean(true)])
  const [filteredProducts, setFilteredProducts] = useState([]);


  // pass in the fetch handler to fetch documents from the API:
useEffect(() => {
  fetchProducts(sortBy)
  .then((productData)=>{
    setProducts(() => {
      return [...productData.data]
    })
  })
}, [sortBy]);

useEffect(()=> {
  setFilteredProducts(()=>{
    return Array.prototype.filter.apply(products, filterFn)
  })
},[filterFn])



const handleSortUpdate = (value) => {
  setSortBy(value)
}

const handleFavorite = (faved, id) => {
  console.log(id, `${id}faved: =>`, faved)
  if(!faved) return setFaves(prevFaves => {
    console.log("not faved")
    let addedFave = {id: id};
    return {...prevFaves, ...addedFave}
  })
  let remainingFaves = _.omit(faves, id);
  console.log("there are faves to set!")
  setFaves(() => {
    return {...remainingFaves}
  })
}

const handleSearch = (e) => {
  const searchTerm = e.target._valueTracker.getValue() // this gets value as we type
  if(!searchTerm){
    refreshProducts()
  }
  return setFilterFn(()=> [returnSearchMatches(searchTerm)])
}

const refreshProducts = () => {
  return setFilteredProducts(() => []);
}
const returnRandomDiscount = () => {
  const discounts = ['Special'];
  return discounts[Math.floor(Math.random() * discounts.length)];
}

const productsList = filteredProducts.length ? filteredProducts : products;
  return (
    <div className="App">
      <NavBar/>

      <div className="app">
        <SearchBar handleSearch={handleSearch}/>
        <SortSelect options={sortOptions} default="popularity" handleSelect={handleSortUpdate}/>

        {/* START PRODUCT CONTAINER */}
        <div className="product-card-container">
{
  productsList.map(({_id, itemName, restaurant, lastOrderedAt, productPrice, discountDecimal, orders}, i) => (


    <div className="trending-item-row" key={i}>


    <div className="trending-item-card">

    <CardHeader itemName={itemName} faves={faves} id={_id} handleClick={handleFavorite}/>




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
