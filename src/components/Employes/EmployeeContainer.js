import React, { useState } from 'react'
import { connect } from 'react-redux'
import HeaderPortion from '../Header/Header'
import { addEmployee } from '../redux/Action/EmployeeAction'
import { useNavigate } from 'react-router-dom'

const EmployeeContainer = (props) => {
    const [name, setName] = useState()
    const [id, setId] = useState()
    const [address, setAddress] = useState()
    const {addEmployee} = props

    const navigate = useNavigate()

    const handleChange = (e) => {
            console.log(e.target.value)
        let value = e.target.value;
        let name = e.target.name;
        if ( name === "employeeName"){
            setName(value);
        }
        if ( name === "employeeId"){
            setId(value);
        }
        if ( name === "employeeAddress"){
            setAddress(value);
        }
    }

    const handleSubmit =() => {
        let obj = {
            name: name,
            employeeId: id,
            address: address
        }
        console.log(obj)
        addEmployee(obj)
        navigate('/')
    }
  return (
    <>
        <HeaderPortion/>
        <div className='container'>
            <form>
                <label>Employee Name</label>
                <input type="text" onChange={handleChange} value={name} name="employeeName"/><br/><br/>
                <label>Employee Id</label>
                <input type="text" onChange={handleChange} value={id} name="employeeId"  /> <br/><br/>
                <label>Employee Address</label>
                <input type="text" onChange={handleChange} value={address} name="employeeAddress"  /><br/><br/>
                <input type='button' value="submit" onClick={handleSubmit}/>
            </form>
        </div>
    </>
  )
}

// export default EmployeeContainer

const mapStateToProps = (state) =>({

})

const mapDispatchToProps = {
    addEmployee
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeContainer)