import React, { useState, useEffect} from 'react'; 
import EmployeeTable from '../EmployeeTable'; 
import Nav from '../Navbar'; 
import API from '../../utils/API'; 
import EmployeeInfoContext from '../../utils/EmployeeContextInfo';


export default function EmployeeInfo() { 
    const [employeeState, setEmployeeState] = useState({ 
        users: [], 
        order: 'ascend', 
        filteredUsers: [], 
        headings: [
            { name: 'Image', width: '10%'},
            { name: 'Name', width: '10%' }, 
            { name: 'Phone', width: '20%' }, 
            { name: 'Email', width: '20%' }, 
            { name: 'DOB', width: '10%' }
        ]
    }); 

    const handleSort = heading => { 
        if (employeeState.order === 'descend') { 
            setEmployeeState({
                order: 'ascend'
            })
        } else { 
            setEmployeeState({
                order: 'descend'
            })
        }

        const compareFunction = (a, b) => {
            if (employeeState.order === 'ascend') { 
                if (a[heading] === undefined) {
                    return 1; 
                } else if (b[heading] === undefined) {
                    return -1; 
                } else if (heading === 'name') { 
                    return a[heading].first.localeCompare(b[heading].first); 
                } else { 
                    return b[heading] - a[heading]; 
                }
            } else { 
                if (a[heading] === undefined){ 
                    return 1; 
                } else if (b[heading] === undefined){ 
                    return -1; 
                } else if (heading === 'name'){ 
                    return b[heading].first.localeCompare(a[heading].first); 
                } else { 
                    return b[heading] - a[heading]; 
                }
            }
        }
        const sortedUsers = employeeState.filteredUsers.sort(compareFunction); 

        setEmployeeState({
            ...employeeState, 
            filteredUsers: sortedUsers
        }); 
    };


    const handleSearchChange = event => { 
        const filter = event.target.value; 
        const filteredList = employeeState.users.filter(item => { 
            let values = item.name.first.toLowerCase(); 
            return values.indexOf(filter.toLowerCase()) !== -1; 
        });

        setEmployeeState({
            ...employeeState, 
            filteredUsers: filteredList 
        });
    };

    useEffect(() => {
        API.getUsers().then(results => {
            setEmployeeState({
                ...employeeState, 
                users: results.data.results, 
                filteredUsers: results.data.results
            }); 
        }); 
    }, []); 

    return (
        <EmployeeInfoContext.Provider 
            value={{ employeeState, handleSearchChange, handleSort}}>
                <Nav />

                <div className='data-area'>
                    {employeeState.filteredUsers.length > 0
                    ? <EmployeeTable /> : <div></div>}
                </div>
            </EmployeeInfoContext.Provider>
    ); 
}