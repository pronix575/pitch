import React from 'react'
// import { Illustration } from '../../components/illustration/illustration'
// import illustration from '../../../assets/images/startPageImg.jpg'
import './startPage.scss'
import { NavLink } from 'react-router-dom'
import { Button } from '../../components/buttons/Button'
// import { Range } from '../../components/grid/Range'

export const StartPage: React.FC = () => {

    return (
        <div className="startPage flex">
            <div className="p1h">
                {/* <Illustration 
                    src={ illustration } 
                    styles={{ maxWidth: "700px" }} 
                    classList={["flex"]} 
                />

                <Range height={ 30 } /> */}

                <h3 className="flex">The new social network</h3>
                
                <div className="flex">
                    <NavLink to="/sign-up">
                        <Button 
                            classList={["btn-style-fill-b"]}
                            styles={{ margin: "10px 0 0 0" }}
                        >
                            start now
                        </Button>
                    </NavLink>
                </div>    
            </div>    
        </div>
    )
}