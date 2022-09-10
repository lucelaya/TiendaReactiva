import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
// import ItemDetail from "./ItemDetail"
// import products from "./productsData"
import products from "../../myComics.json";
import { Comic } from "../Comic";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const { slug } = useParams()

    useEffect(() => {
        getItem().then(data => {
            console.log(item.title)
            if (data) {
                setItem(data)
            }
        })
    }, [])

    // getItem con Promise
    const getItem = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(products.find(p => p.slug == slug))
            }, 1000);
        })
    }

    return (
        // <Comic item={item} />
        <Comic key={item.id} {...item} />
    )
}
export default ItemDetailContainer