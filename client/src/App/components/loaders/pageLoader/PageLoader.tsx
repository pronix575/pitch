import React from 'react'
import './pageLoader.scss'
import { Loader } from '../baseLoader/Loader'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/rootState'
import { Illustration } from '../../illustration/illustration'
import illustration from '../../../../assets/images/logo.png'
import { Flex } from '../../grid/Flex'

export const PageLoader: React.FC = () => {

    const isLoading = useSelector((state: RootState) => state.app.isLoading)

    return (
        <>
            { isLoading &&
                <div className="pageLoader flex">
                    <div>
                        <Illustration 
                            src={ illustration }
                            styles={{ 
                                maxWidth: "40px",
                                transform: "translateY(62px) translateX(25px)",
                            }} 
                            classList={["flex"]} 
                        />
                        <Flex>
                            <Loader 
                                styles={{ 
                                    height: "90px",
                                    width: "90px",
                                    border: "6px solid black",
                                }} 
                                color="var(--base-color)" 
                            />
                        </Flex>
                    </div>
                </div>
            }
        </>
    )
}