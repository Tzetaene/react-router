import { Link } from 'react-router-dom'
import './VanCard.css'


export const VanCard = ({id, name, price, type, imageUrl})=>{

    const buttonClass = type == "simple" ? 'van-card-button-simple' : type == "rugged" ? 'van-card-button-rugged' : 'van-card-button-luxury'

    return (

        <Link className='van-card-anchor' to={`/vans/${id}`}>
            <div className="van-card-wrapper">
                <img className="van-card-img" src={imageUrl} alt="" />
                <div className="van-card-content">
                    <h3>{name}</h3>
                    <div className="van-card-price">
                        <p>{`$${price}`}</p>
                        <p>/day</p>
                    </div>
                </div>
                <button className={buttonClass}>{type}</button>
            </div>

        </Link>
    )
}