const returnRandomDiscount = () => {
    const discounts = ["Special"];
    return discounts[Math.floor(Math.random() * discounts.length)];
};

const CardPricingRow = ({ product }) => (
    <div className="pricing-details-row card-row">
        <p className="price">${product.productPrice.toFixed(2)} </p>
        <p>
            <span className="discount-price">
                ${(product.productPrice * product.discountDecimal).toFixed(2)}{" "}
                &#8226; {returnRandomDiscount()}
            </span>
        </p>
    </div>
);

export default CardPricingRow;
