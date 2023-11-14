import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import './VanDetails.css'

export const VanDetails = ()=>{

    const [vanDetails, setVanDetails] = useState([])

    const params = useParams()

    useEffect(()=>{

            fetch('../../mocks/vans-api.json')
                .then(res => res.json())
                .then(data => data.filter((van) => van.id == params.id))
                .then(selectedVan => setVanDetails(selectedVan))

    },[])

    if(vanDetails.length === 0){
        return <p>Loading...</p>
    }

    const {imageUrl, name, price, description} = vanDetails[0] 

    return(
        <section className="van-details-warpper">
            <Link to='/vans'><p>Back to all vans</p></Link>
            <img className="van-details-img" src={imageUrl} alt={name} />
            <h1>{name}</h1>
            <h2>$<span className="van-details-price">{price}</span>/day</h2>
            <p>{description}</p>
            <button>Rent this van</button>
        </section>
    )
}