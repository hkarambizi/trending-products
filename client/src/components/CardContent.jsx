import CardRestaurantRow from "./CardRestaurantRow";
import CardPricingRow from "./CardPricingRow";
import CardMetadataRow from "./CardMetadataRow";

const CardContent = ({ product }) => (
    <div className="product-card-content-row">
        <CardRestaurantRow product={product} />
        <CardPricingRow product={product} />
        <CardMetadataRow product={product} />
    </div>
);
export default CardContent;
