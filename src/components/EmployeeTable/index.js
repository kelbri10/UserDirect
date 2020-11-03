import React, { useContext } from 'react'; 
import EmployeeInfoContext from '../../utils/EmployeeContextInfo';
import EmployeeBody from '../EmployeeBody';

export default function EmployeeTable() { 
    const context = useContext(EmployeeInfoContext); 

    return ( 
        <div className='datatable mt-5'>
            <table
                id='table'
                className='table table-striped table-hover table-condensed'
            >
                <thead>
                    <tr>
                        {context.employeeState.headings.map(({ name, width}) => {
                            return (
                                <th
                                    className='col'
                                    key={name}
                                    style={{ width }}
                                    onClick={() => {
                                        context.handleSort(name.toLowerCase()); 
                                    }}>
                                        {name}
                                        <span className='pointer'></span>
                                </th>
                            )
                        })}
                    </tr>
                </thead>

                <EmployeeBody />
            </table>
        </div>
    );
}