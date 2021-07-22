import Card from './Card'
const ProductCardRow = ({product, faves, handleFavorite}) => (
    <div className="trending-item-row">
        <Card product={product} faves={faves} handleFavorite={handleFavorite}/>
    </div>
)
export default ProductCardRow;
