const ItemDetail = ({ item: { title, price } }) => {
    return (
        <div className="m-5">
            <div>{title}</div>
            <div>{price}</div>
        </div>
    )
}
export default ItemDetail