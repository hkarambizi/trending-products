import { BiUserCircle } from "react-icons/bi";
import { FaRegClock } from "react-icons/fa";
import { sayTheTimeDiff } from "../helpers/date";

const Tag = ({ product, tagStyle }) => {
    const { orders, lastOrderedAt } = product;
    const lastOrderedTag = (
        <div className="time-ordered metadata-pill pill">
            <FaRegClock className="icon"></FaRegClock>
            <p className="time-ordered">
                <span className="time-ago">
                    {sayTheTimeDiff(lastOrderedAt)}
                </span>
            </p>
        </div>
    );

    const recentOrdersTag = (
        <div className="recent-orders metadata-pill pill">
            <BiUserCircle className="icon"></BiUserCircle>

            <p className="recent-orders">
                <span className="orders-count"></span>
                {orders.length} recent orders
            </p>
        </div>
    );
    return tagStyle === "count" ? recentOrdersTag : lastOrderedTag;
};
export default Tag;
