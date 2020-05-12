import React from 'react'
import './App.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRouter } from './router/Router'
import { Header } from '../components/header/authHeader/Header'
import { Notifications } from '../components/pushNotifications/Notifications'

const App: React.FC = () => {  
  
  return (
    <>
      <Notifications />
      <Router>
        <Header />
        <AppRouter />
      </Router>
    </>
  )
}

export default App
