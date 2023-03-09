import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ColorPicker from "../../ejemplos/ColorPicker/ColorPicker"
import ItemCount from "../ItemCount/ItemCount"


const colores = [
    {
        value: "red",
        label: "Rojo"
    },
    {
        value: "blue",
        label: "Azul"
    },
    {
        value: "green",
        label: "Verde"
    },
    {
        value: "black",
        label: "Negro"
    },
    {
        value: "white",
        label: "Blanco"
    },
]

const ItemDetail = ({item}) => {
    const [cantidad, setCantidad] = useState(1)
    // const [color, setColor] = useState(null)
    // console.log(color)
    const navigate = useNavigate()
    
    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad,
            color
        }

        console.log(newItem)
    }

    return (
        <div className="container my-5">
            <h2>{item.name}</h2>
            <img src={item.img} alt={item.name}/>
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
            {/* <ColorPicker setColor={setColor} options={colores}/> */}

            <ItemCount 
                max={item.stock}
                cantidad={cantidad}
                setCantidad={setCantidad}
                handleAgregar={handleAgregar}
            />

            <button onClick={handleVolver} className="btn btn-primary">Volver</button>
        </div>
    )
}

export default ItemDetail