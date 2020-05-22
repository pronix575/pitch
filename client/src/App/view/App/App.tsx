import React, { useEffect } from 'react'
import './App.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRouter } from './router/Router'
import { Header } from '../components/header/Header'
import { Notifications } from '../components/pushNotifications/Notifications'
import { useDispatch } from 'react-redux'
import { authentification } from '../../data/redux/actions/auth.actions'
import { PageLoader } from '../components/loaders/pageLoader/PageLoader'

const App: React.FC = () => {  

  const dispatch = useDispatch()
  
  // initial authentification
  useEffect(() => {  
    dispatch(authentification())
  }, [dispatch])

  return (
    <>
      <PageLoader />
      <Notifications />
      <Router>
        <Header />
        <AppRouter />
      </Router>
    </>
  )
}

export default App
