import React, { Component } from 'react'

const Navbar = () => (
    <nav>
        <div class="nav-wrapper blue">
            <div class="container">
                <a href to="/" class="brand-logo">My Stats</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li>
                        <a href="nav.uri">
                            Home
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Navbar