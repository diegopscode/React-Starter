import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <header>
        <div className="container">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>
        </div>
    </header>
)

export default Header;