import { useEffect } from 'react'
import { useState } from 'react'
import './ItemListContainer.scss'
import { pedirDatos } from '../../helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'

//   protocolo |   dominio      | endpoints | params
// URL: https://www.coderhouse.com/alumnos?id=10

// query params: GET || curso = string | number || limit = number
// URL: https://www.coderhouse.com/alumnos?limit=20&curso=reactjs

// url params: GET
// URL: https://www.coderhouse.com/alumnos/{id}/{curso}
// URL: https://www.coderhouse.com/alumnos/12342/reactjs

// fetch(url)
//     .then()
//     .catch()
//     .finally()

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        
        pedirDatos()
            .then((response) => {
                setProductos( response )
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div className="contenedor">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList items={productos}/>
            }
            
        </div>
    )
}

export default ItemListContainer