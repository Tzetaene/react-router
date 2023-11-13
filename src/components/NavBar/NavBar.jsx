
import { Link } from 'react-router-dom'
import './NavBar.css'

export const NavBar = ()=>{
    return(
        <nav className="nav-wrapper">
            <div className="navbar-logo">
                #VANLIFE
            </div>
            <div className="navbar-links">
                <ul>
                    <li><Link className='navbar-link' to='/about'>About</Link></li>
                    <li><Link className='navbar-link' to='/vans'>Vans</Link></li>
                </ul>
            </div>
        </nav>
    )
}
