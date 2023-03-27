import React from 'react'
import { Table  } from 'semantic-ui-react'
import HeaderPortion from '../Header/Header'


const EmployeList = () => {

    const getTableBody = () =>{
        return(
            <>
            <Table.Row className="form-data">
                <Table.Cell>1</Table.Cell>
                <Table.Cell>Shubham Joshi</Table.Cell>
                <Table.Cell>101</Table.Cell>
                <Table.Cell>Ramnagar</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>Sumit Suyal</Table.Cell>
                <Table.Cell>102</Table.Cell>
                <Table.Cell>Bhimtal</Table.Cell>
            </Table.Row>
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



export default EmployeList