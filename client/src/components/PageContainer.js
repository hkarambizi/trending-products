import SearchBar from "./SearchBar";
import SortSelect from "./SortSelect";
import ProductsContainer from "./ProductsContainer";

const PageContainer = ({handleSearch, handleSortUpdate, handleFavorite, products, faves}) => (
            <div className="app">
                <SearchBar handleSearch={handleSearch}/>
                <SortSelect default="popularity" handleSelect={handleSortUpdate}/>
                <ProductsContainer products={products} handleFavorite={handleFavorite} faves={faves}/>
            </div>
)
export default PageContainer;
