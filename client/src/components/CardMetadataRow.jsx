import Tag from "./Tag";

const CardMetadataRow = ({ product }) => (
    <div className="meta-data-row card-row">
        <Tag product={product} tagStyle="count" />
        <Tag product={product} tagStyle="recent" />
    </div>
);
export default CardMetadataRow;
