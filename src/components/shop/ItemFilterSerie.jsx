import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
// import products from "./productsData"
import products from "../../myComics.json";
import { Comic } from "../Comic";

let productsAux = products
const ItemFilterSerie = () => {

    const [item, setItem] = useState({})
    const { serie } = useParams()
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
                // resolve(products.filter(p => p.serie === serie)) //TODO
                resolve(productsAux = products.filter(p => p.serie === serie))
            }, 1000);
        })
    }
    return (
        <div>
            {productsAux.map(item =>
                <Comic key={item.id} {...item} />)
            }
        </div>
    )
}
export default ItemFilterSerie
