import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { InitialState } from '../../../types'
import { StartPage } from '../../pages/startPage/StartPage'
import { SignUpPage } from '../../pages/authentication/signUpPage/SignUpPage'
import { SignInPage } from '../../pages/authentication/signInPage/SignInPage'
import { FeedPage } from '../../pages/feedPage/FeedPage'
import { ProfilePage } from '../../pages/profilePage/ProfilePage'

export const AppRouter: React.FC = () => {

    const isAuth = useSelector((state: InitialState) => state.auth.isAuth)
  
    return (
      <div className="App flex">
        <div className="container" style={{ minHeight: "calc(100vh - 60px)" }}>
            
            { isAuth ? 
                
                <Switch>
                    <Route path="/feed" exact>
                        <FeedPage />
                    </Route> 

                    <Route path="/profile" exact>
                        <ProfilePage />
                    </Route> 
                    
                    <Redirect to="/profile" />
                </Switch> 
                
                :

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