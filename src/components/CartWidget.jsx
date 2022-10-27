import { Link } from "react-router-dom";
import { useItems } from "./CartContext";
function CartWidget() {
    const {items} = useItems();
    return (
        <>
        <Link to={`/cart`}>
            <img src="/assets/baseline_shopping_cart_black_24dp.png" alt="shopping cart" />
            {items.reduce( (acc, c) => acc + c.quantity, 0)> 0 && (
                <h6 style={{ margin: "2rem" }}>{items.reduce( (acc, c) => acc + c.quantity, 0)}</h6>
            )}
        </Link>
        </>
    );
}
export default CartWidget;

