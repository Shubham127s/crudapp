import React from 'react'
import { useEffect } from 'react'
import { Table,Button  } from 'semantic-ui-react'
import HeaderPortion from '../Header/Header'
import { getEmployee } from '../redux/Action/EmployeeAction'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const EmployeList = (props) => {

    const {getEmployee, employeeList} = props

    useEffect(() => {
        getEmployee();
    }, [getEmployee])
    console.log("employeeReduceremployeeReducer", employeeList)

    const getTableBody = () =>{
        return(
            <>
            {employeeList.map((item, index) => {
                return(
                    <Table.Row  className="form-data">
                        <Table.Cell>{index + 1}</Table.Cell>
                        <Table.Cell>{item.name}</Table.Cell>
                        <Table.Cell>{item.employeeId}</Table.Cell>
                        <Table.Cell>{item.address}</Table.Cell>
                        <Table.Cell>
                        <Link to={{ 
                                    pathname: `/addemployee/${item.id}`
                                }}>
                            <Button icon className="edit-btn">
                                Edit
                            </Button>
                            </Link> <span/>
                            <Button icon
                                // onClick={() => deleteCategory(data.id)} 
                                className="delete-btn">
                                Delete
                            </Button>
                        </Table.Cell>
                    </Table.Row>
                )
            })}
            </>
        )
    }

    const getTable =() => {
        return(
            <div className='list-table'>
                <Table basic='very'>
                    <Table.Header>
                        <Table.Row className="form-data">
                            <Table.HeaderCell> SNo</Table.HeaderCell>
                            <Table.HeaderCell> Employee Name</Table.HeaderCell>
                            <Table.HeaderCell> Employee Id</Table.HeaderCell>
                            <Table.HeaderCell> Address</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {getTableBody()}
                    </Table.Body>
                </Table>
            </div>

        )
    }
  return (
    <div>
        <HeaderPortion/>
        <div>
            <h1> Employee List</h1>
        </div>
       {getTable()}
    </div>
  )
}

const mapStateToProps = (state) =>({
    employeeList: state.employeeReducer.employeeList
})

const mapDispatchToProps = {
    getEmployee
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeList)

// export default EmployeList