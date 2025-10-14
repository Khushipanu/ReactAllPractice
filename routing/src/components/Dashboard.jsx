import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <h2>DashBoard button</h2>
      <div>
        <NavLink to="courses">
          <button style={{margin:"10px",padding:"10px 20px"}}>Courses</button>
        </NavLink>
        <NavLink to="mock-tests">
          <button style={{margin:"10px",padding:"10px 20px"}} >Mock-test</button>
        </NavLink>
         <NavLink to="reports">
          <button style={{margin:"10px",padding:"10px 20px"}} >Reports</button>
        </NavLink>
      </div>
      <Outlet/>
    </div>
  )
}

export default Dashboard
