import './App.css';
import { Routes, Route } from 'react-router-dom';
import EmployeList from './components/Employes/EmployeList';
import EmployeeContainer from './components/Employes/EmployeeContainer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<EmployeList/>}/>
        <Route exact path='/addemployee' element={<EmployeeContainer/>} />
        <Route exact path='/addemployee/:id' element={<EmployeeContainer/>} />
      </Routes>
    </div>
  );
}

export default App;
