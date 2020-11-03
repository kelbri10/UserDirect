import React, { useContext } from 'react'; 
import EmployeeInfoContext from '../../utils/EmployeeContextInfo';

export default function SearchBar() { 
    const context = useContext(EmployeeInfoContext); 

    return (
        <div className='searchBar'>
            <form className='form-inline'>

            <input 
                placeholder='enter name'
                type='text'
                className='form-control'
                aria-label='search'
                id='name'
                onChange={name=> context.handleSearchChange(name)}
            />

            <button
                className='btn btn-outline-secondary'
                type='submit'>
                    Search
            </button>

            </form>
        </div>
    );
}