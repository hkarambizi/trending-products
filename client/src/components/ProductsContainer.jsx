import ProductCardRow from "./ProductCardRow";

const ProductsContainer = ({ products, handleFavorite, faves }) => (
    <div className="product-card-container">
        {products.map((product, i) => (
            <ProductCardRow
                product={product}
                faves={faves}
                key={i}
                handleFavorite={handleFavorite}
            />
        ))}
    </div>
);

export default ProductsContainer;
