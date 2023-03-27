import React from 'react'
import { Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const HeaderPortion = () => {
  return (
    <div className='header-container'>
        <Header as='h3' block>
                <div className="sub-heading">
                    <div className="list-container">
                        <Link to="/">
                            Employee List
                        </Link>
                        <Link to="/addemployee">
                            Add Employee
                        </Link>
                       
                    </div>
                </div>
        </Header>
    </div>
  )
}

export default HeaderPortion