import React from 'react'

const Navbar = () => (
    <nav>
        <div class="nav-wrapper blue">
            <div class="container">
                <a href="/" class="brand-logo">The Weatherman Can!</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li>
                        <a href="/">
                            Home
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Navbar