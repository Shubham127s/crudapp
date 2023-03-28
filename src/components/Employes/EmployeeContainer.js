import React, { useState } from 'react'
import { connect } from 'react-redux'
import HeaderPortion from '../Header/Header'
import { addEmployee, viewEmployee,updateEmployee } from '../redux/Action/EmployeeAction'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

const EmployeeContainer = (props) => {
    const [name, setName] = useState();
    const [employeeId, setEmployeeId] = useState()
    const [address, setAddress] = useState()
    const {addEmployee, viewEmployee, viewSingleData, updateEmployee} = props

    const navigate = useNavigate();
    let {id} = useParams();
    console.log(id)

    useEffect(() => {
        if(id){
            viewEmployee(id)
        }
    }, [viewEmployee, id])

    console.log("viewSingleData", viewSingleData)

    const handleChange = (e) => {
            console.log(e.target.value)
        let value = e.target.value;
        let name = e.target.name;
        if ( name === "employeeName"){
            setName(value);
        }
        if ( name === "employeeId"){
            setEmployeeId(value);
        }
        if ( name === "employeeAddress"){
            setAddress(value);
        }
    }

    const handleSubmit =() => {
        let obj = {
            name: name,
            employeeId: employeeId,
            address: address
        }
        console.log(obj)
        if (id) {
            updateEmployee(id, obj);
          } else {
            addEmployee(obj)
          }
        
        navigate('/')
    }
  return (
    <>
        <HeaderPortion/>
        <div className='container'>
            <form>
                <label>Employee Name</label>
                <input type="text" onChange={handleChange} value={name ? name : viewSingleData.name} name="employeeName"/><br/><br/>
                <label>Employee Id</label>
                <input type="text" onChange={handleChange} value={employeeId ? employeeId : viewSingleData.employeeId } name="employeeId"  /> <br/><br/>
                <label>Employee Address</label>
                <input type="text" onChange={handleChange} value={address ? address : viewSingleData.address} name="employeeAddress"  /><br/><br/>
                {id ? (
                    <input type="submit" value="Update" onClick={handleSubmit} />
                    ) : (
                    <input type="submit" value="Submit" onClick={handleSubmit} />
                )}
            </form>
        </div>
    </>
  )
}

// export default EmployeeContainer

const mapStateToProps = (state) =>({
    viewSingleData: state.employeeReducer.viewSingleData

})

const mapDispatchToProps = {
    addEmployee,
    viewEmployee,
    updateEmployee
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeContainer)