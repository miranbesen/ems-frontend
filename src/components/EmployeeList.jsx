import React from 'react'

const EmployeeList = () => {
  
  const dummyData=[
       {
        "id":1,
        "firstName":"Miran",
        "lastName":"Besen",
        "email":"miranbesen@hotmail.com"
       },
       {
        "id":2,
        "firstName":"Miran2",
        "lastName":"Besen",
        "email":"miranbesen@hotmail.com"
       },
       {
        "id":3,
        "firstName":"Miran3",
        "lastName":"Besen",
        "email":"miranbesen@hotmail.com"
       }     
  ]
  
    return (
    <div className='container'>
        <h2 className='text-center'>List of Employees</h2>
        <table class='table table-dark table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email </th>
                </tr>
            </thead>
            <tbody>
                {
                    dummyData.map(employee=>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                        </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default EmployeeList