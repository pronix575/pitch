import React from 'react'
import './profilePage.scss'
import { useQuery } from '@apollo/react-hooks'
import { USER_DATA } from '../../../data/graphql/schema.graphql'
import { useSelector, useDispatch } from 'react-redux'
import { InitialState, UserDataResponse } from '../../../types'
import { sendNewNotification } from '../../../data/redux/actions/notifications.action'
import { Loader } from '../../components/loaders/baseLoader/Loader'

export const ProfilePage: React.FC = () => {

    const dispatch = useDispatch()
    
    const token = useSelector((state: InitialState) => state.auth.token)

    const { loading, data, error } = useQuery<UserDataResponse>(USER_DATA, {
        variables: {
            token
        }
    })


    if (error) {
        dispatch(sendNewNotification({
            type: 'ERROR',
            message: 'connection failed',
            id: Date.now()
        }))
    }

    return (
        <div className="profilePage">
            {
                loading && <Loader />
            }
            {
                data && 
                <h3>
                    { data?.userData?.user?.userName }
                </h3>
            }
        </div>
    )
}