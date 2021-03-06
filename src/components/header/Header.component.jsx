import React from 'react'
import { ReactComponent as Logo }  from '../../assets/crown.svg'
import './Header.styles.scss'
import {Link } from 'react-router-dom'
import {auth} from '../../firebase/Firebase.utils'

const Header = ({currentUser}) => {
    return (
        <div className = "header">
            <Link to = '/' className = "logo-container">
                <Logo className = "logo"/> 
            </Link>
            <div className = "options">
                <Link className = "option" to = '/shop' >Shop</Link>
                <Link className = "option" to = '/contact' >Contact</Link>
                {currentUser ? <div className = "option" onClick = {() => auth.signOut}>Sign Out</div> : <Link className = "option" to = '/signin' >sign In</Link>}
            </div>
        </div>
    ) 
}

export default Header
