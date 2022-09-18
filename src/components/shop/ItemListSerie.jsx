import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
// import products from "./productsData"
import products from "../../myComics.json";

const ItemListSerie = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(products)
    }, [])

    let coleccion = items
    let series = []
    coleccion.map(item=>{series.push(item.serie)})
    // console.log(series)
    const filtro = series.reduce((acc,item)=>{
        if(!acc.includes(item)){
            acc.push(item);
        }
        return acc;
    },[])

    return (
        <div>
            {filtro.map(i =>
                <Link to={`/serie/${i}`} key={i}>
                    <div className="m-2 p-2 bg-blue-300"> {i} </div>
                </Link>
            )}
        </div>
    )
}
export default ItemListSerie



