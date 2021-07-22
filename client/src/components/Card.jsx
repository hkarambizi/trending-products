import CardHeader from "./CardHeader";
import CardContent from "./CardContent";

const Card = ({ product, faves, handleFavorite }) => (
    <div className="trending-item-card">
        <CardHeader
            itemName={product.itemName}
            faves={faves}
            id={product._id}
            handleClick={handleFavorite}
        />
        <CardContent product={product} />
    </div>
);
export default Card;
