import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { InitialState } from '../../types'
import { StartPage } from '../../pages/startPage/StartPage'
import { SignUpPage } from '../../pages/authentication/signUpPage/SignUpPage'
import { SignInPage } from '../../pages/authentication/signInPage/SignInPage'
import { FeedPage } from '../../pages/feedPage/FeedPage'
import { GridContainer } from '../../components/grid/GridContainer'
import { LeftNavMenu } from '../../components/navigation/leftDesktopNavMenu/LeftDesktopNavMenu'

export const AppRouter: React.FC = () => {

    const isAuth = useSelector((state: InitialState) => state.auth.isAuth)
  
    return (
      <div className="App flex">
        <div className="container">
            
            { isAuth ? 
                <GridContainer styles={{ gridTemplateColumns: "20% 80%" }} className="baseAppGridContainer">
                    <LeftNavMenu />
                    <Switch>
                        <Route path="/feed" exact>
                            <FeedPage />
                        </Route> 

                        <Route path="/profile" exact>
                            progile
                        </Route> 
                        {/* <Redirect to="/feed" /> */}
                    </Switch> 
                </GridContainer>
                
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