import React from 'react'
import { Link } from 'gatsby'

const Nav = () => (
    <div style={{
        background: '#eee',
        padding: '10px'
    }}>
        <ul style={{
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-evenly'
        }}>
            <li><Link to="/">Home</ Link></li>
            <li><Link to="/about">About</ Link></li>
        </ul>
    </div>
)

export default Nav
