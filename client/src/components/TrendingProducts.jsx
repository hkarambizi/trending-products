import React, { useState, useEffect } from 'react'
import _ from 'lodash';
import { returnBoolean, returnSearchMatches, showFavorites } from '../helpers/productHelpers'
import ProductsContainer from './ProductsContainer';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import SortSelect from './SortSelect';
import { fetchProducts } from '../api/products'
import "../App.scss";
import PageContainer from './PageContainer';


const TrendingProducts = () => {
    const [faves, setFaves] = useState({});
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
  },[filterFn, products])

  const handleSortUpdate = (value) => {
    setSortBy(value)
  }

  const handleFavorite = (faved, id) => {
    if(!faved) return setFaves(prevFaves => {
      let addedFave = {};
      addedFave[id] = id
      let newFaveCache = {...prevFaves, ...addedFave}
      return newFaveCache
    })
    let remainingFaves = _.omit(faves, id);
    setFaves(() => {
      return {...remainingFaves}
    })
  }

  const handleFilterFavorites = () => {
    setFilterFn(()=> {
      return [showFavorites(faves)];
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
  const productsList = filteredProducts.length ? filteredProducts : products;
    return (
        <div className="App">
            <NavBar favorites={faves} faveFilterHandler={handleFilterFavorites}/>
            <PageContainer
            handleSearch={handleSearch}
            handleFavorite={handleFavorite}
            handleSortUpdate={handleSortUpdate}
            products={productsList}
            faves={faves}
            />
        </div>
    )
}
export default TrendingProducts;
