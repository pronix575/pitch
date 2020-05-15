import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { InitialState } from '../../types'
import { StartPage } from '../../pages/startPage/StartPage'
import { SignUpPage } from '../../pages/authentication/signUpPage/SignUpPage'
import { SignInPage } from '../../pages/authentication/signInPage/SignInPage'
import { FeedPage } from '../../pages/feedPage/FeedPage'

export const AppRouter: React.FC = () => {

    const isAuth = useSelector((state: InitialState) => state.auth.isAuth)
  
    return (
      <div className="App flex">
        <div className="container">
            { isAuth ? 
                <Switch>
                    <Route path="/feed" exact>
                        <FeedPage />
                    </Route> 
                    <Redirect to="/feed" />
                </Switch> :

                <Switch>
                    <Route path="/sign-in">
                        <SignInPage />
                    </Route>

                    <Route path="/sign-up">
                        <SignUpPage />
                    </Route> 
                    
                    <Route path="/" exact>
                        <StartPage />
                    </Route>
                    
                    <Redirect to="/" />
                </Switch>
            }
        </div>    
    </div>
  )
}