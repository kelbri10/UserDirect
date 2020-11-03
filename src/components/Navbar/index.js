import React from 'react'; 
import SearchBar from '../SearchBar'; 

export default function Navbar() { 
    return ( 
        <nav className='navbar navbar-light bg-light'>
            <div className= 'col-4'>
            <SearchBar />
            </div>
        </nav>
    )
}