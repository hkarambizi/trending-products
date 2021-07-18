import { FaHeart, FaSearch, FaRegHeart, FaRegClock } from "react-icons/fa";
import { HiChartBar } from "react-icons/hi";
import { BiUserCircle } from "react-icons/bi";
import "./App.scss";

function App() {
    return (
        <div className="App">

            <div className="nav">
                <div className="page-title">
                    <h1 className="title">trending</h1>
                </div>
                <div className="nav-faves">
                    <button className="my-faves">

                            <FaHeart className="my-fave icon left"></FaHeart>

                        My Faves
                    </button>
                </div>
            </div>
            <div className="app">
                <div className="search-container">
                    <div className="search-group">
                    <FaSearch className="search-icon left"></FaSearch>
                        <input
                            type="text"
                            className="search"
                            placeholder="Search"
                        />
                    </div>
                </div>

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

                <div className="product-card-container">
                    <div className="trending-item-row">
                        <div className="trending-item-card">
                            <div className="product-card-header-row">
                                <div className="product-card-item-name">
                                    <p className="item-name">Item 1 Name</p>
                                </div>
                                <div className="card-fave-heart">

                                        <FaRegHeart className="fave-icon icon"></FaRegHeart>

                                </div>
                            </div>
                        </div>

                    </div>
                    {/* START */}
                    <div className="trending-item-row">
                    <div className="trending-item-card">
                            <div className="product-card-header-row">
                                <div className="product-card-item-name">
                                    <h3 className="item-name">Item 2 Name</h3>
                                </div>
                                <div className="card-fave-heart">

                                        <FaRegHeart className="fave-icon icon"></FaRegHeart>

                                </div>
                            </div>
                            <div className="product-card-content-row">
                                <div className="restaurant-details-row card-row">
                                    <p className="restaurant-name">
                                        Restaurant Name &#8226; 0.5mi
                                    </p>
                                </div>
                                <div className="pricing-details-row card-row">
                                    <p className="price">$11.00 </p>

                                    <p><span className="discount-price">
                                        $8.99 &#8226; Discount Name
                                    </span></p>
                                </div>
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
                            </div>
                        </div>
                        </div>
                        {/* END */}
                </div>
            </div>
        </div>
    );
}

export default App;
