import { useState, useEffect } from "react"
import { VanCard } from "../../components/VanCard/VanCard"
import './Vans.css'

export const Vans = ()=>{

    const [vansList, setVansList] = useState([])

    useEffect(()=>{
        fetch('../../mocks/vans-api.json')
        .then((response)=> response.json())
        .then((data)=> setVansList(data))
    },[])

    return(
        <>
            <h1 className="vans-page-title">Explore our van options</h1>
            <section className="vans-page-content">
                {vansList.map((van) => {
                    return(
                        <VanCard
                        key={van.id} 
                        id={van.id}
                        imageUrl={van.imageUrl} 
                        name={van.name} 
                        price={van.price} 
                        type={van.type}/>
                    )
                })}
            </section>
        </>
    )
}