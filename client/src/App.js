import { FaSearch, FaRegHeart, FaRegClock } from "react-icons/fa";
import { HiChartBar } from "react-icons/hi";
import { BiUserCircle } from "react-icons/bi";
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavBar/>


      {/* START OF app */}
      <div className="app">
        <SearchBar/>

        {/* START SelectRow - Most Popular */}
        <div className="sort-select-row">
          <div className="select-sort">
            <HiChartBar className="icon"></HiChartBar>
            <select name="sort-query" id="sort-query">
              <option value="popularity" defaultValue>
                Most Popular
              </option>
              <option value="recent">Recently Ordered</option>
            </select>
          </div>
        </div>
        {/* END SelectRow - Most Popular */}

        {/* START PRODUCT CONTAINER */}
        <div className="product-card-container">

          {/* START CARD LIST ROW */}
          <div className="trending-item-row">

            {/* START of Card */}
            <div className="trending-item-card">

              {/* START Of  Card HEader */}
              <div className="product-card-header-row">
                <div className="product-card-item-name">
                  <h3 className="item-name">Item 2 Name</h3>
                </div>
                <div className="card-fave-heart">

                  <FaRegHeart className="fave-icon icon"></FaRegHeart>

                </div>
              </div>
              {/* END of Card Header */}

              {/* START of Card Content */}
              <div className="product-card-content-row">

                {/* STart of Card Content RoW */}
                <div className="restaurant-details-row card-row">
                  <p className="restaurant-name">
                    Restaurant Name &#8226; 0.5mi
                  </p>
                </div>
                {/* END of Card Content Row */}

                {/* START of Card Content Row */}
                <div className="pricing-details-row card-row">
                  <p className="price">$11.00 </p>

                  <p><span className="discount-price">
                    $8.99 &#8226; Discount Name
                  </span></p>
                </div>
                {/* END of Card Content Row */}

                {/* START of Card Content Row  */}
                <div className="meta-data-row card-row">
                  <div className="recent-orders metadata-pill pill">

                    <BiUserCircle className="icon"></BiUserCircle>

                    <p className="recent-orders">
                      <span className="orders-count"></span>{" "}
                      recent orders
                    </p>
                  </div>
                  <div className="time-ordered metadata-pill pill">

                    <FaRegClock className="icon"></FaRegClock>

                    <p className="time-ordered">
                      <span className="time-ago"></span>
                      ago
                    </p>
                  </div>
                </div>
                {/* END of Card Content RoW */}

              </div>
              {/* END of Card COntent */}

            </div>
            {/* END of Card */}

          </div>
          {/* END CARD LIST ROW */}

        </div>
        {/* PRODUCT CONTAINER END */}

      </div>
      {/* END of app */}

    </div>
    // END of App
  );
}

export default App;
