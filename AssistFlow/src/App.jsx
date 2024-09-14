import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import Dashboard from './components/DashboardComponent'
import Login from './components/LoginComponent'
import TicketList from './components/TicketListComponent'

const App = () => {

  return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tickets" element={<TicketList />} />
        </Routes>
      </Router>
  );
}

export default App
