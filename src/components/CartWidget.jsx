import { Link } from "react-router-dom";
function CartWidget() {
    return (
        <Link to={`/cart`}>
            <img src="/assets/baseline_shopping_cart_black_24dp.png" alt="shopping cart" />
        </Link>
    );
}
export default CartWidget;

