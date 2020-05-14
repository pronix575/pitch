import React, { useState } from 'react'
import { Flex } from '../../../components/grid/Flex'
import { Form } from '../../../components/forms/Form'
import { Input } from '../../../components/inputs/Input'
import { Button } from '../../../components/buttons/Button'
import { SignInForm, ChangeEvent, SubmitEvent, LoginResponse } from '../../../types'
import { NavLink } from 'react-router-dom'
import { Loader } from '../../../components/loaders/Loader'
import { loginQuery } from '../../../graphql/queries'
import { useDispatch } from 'react-redux'
import { sendNewNotification, clearNotifications } from '../../../redux/actions/notifications.action'
import { ApolloCurrentQueryResult } from 'apollo-boost'
import { login } from '../../../redux/actions/auth.actions'

export const SignInPage: React.FC = () => {

    const [form, setForm] = useState<SignInForm>({
        email: '',
        password: ''
    })

    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()

    const submitHandler = async (event: SubmitEvent) => {
        event.preventDefault()

        setLoading(true)

        try {
            const { data }: ApolloCurrentQueryResult<LoginResponse> = await loginQuery(form)
            const res = data?.login
    
            res && res?.message !== "success" && dispatch(sendNewNotification({
                message: res?.message || 'app error',
                type: 'ERROR',
                id: Date.now()
            }, 5000))
    
            if (res && res?.message === "success") { 
                dispatch(login(res?.token)) 
                dispatch(clearNotifications()) 
            }

        } catch (e) {
            dispatch(sendNewNotification({
                id: Date.now(),
                message: "connection failed",
                type: "ERROR"
            }))
        }

        setLoading(false)
    }   

    const onChange = async (event: ChangeEvent) => {
        event.persist()

        setForm(prev => ({ 
                ...prev, 
                [event.target.name]: event.target.value 
            })
        )
    }
    
    return (
        <Flex className="signUpPage h8 w100">
            <div className="w100 p1h">
                <Form styles={{ paddig: "10px" }} onSubmit={ submitHandler }>

                    <h2 style={{ margin: "2px 0 10px 0" }}>
                        Log in
                    </h2>
                    
                    <Input 
                        type="email"
                        name="email"
                        value={ form.email }
                        onChange={ onChange }
                        required={ true }
                        placeholder="email"
                    />

                    <Input 
                        type="password"
                        name="password"
                        value={ form.password }
                        onChange={ onChange }
                        required={ true }
                        placeholder="password"
                    />

                    <Button disabled={ loading }>
                        { loading ?
                                <Loader 
                                    color={ "white" } 
                                    containerStyles={{ transform: "translateY(-6px)" }} 
                                /> 
                            :
                            "sign in"
                        }
                    </Button>
                </Form>

                <Flex className="w100 flex">
                    <div className="minilink flex">
                        <NavLink to="/sign-up" style={{ color: "rgb(171, 171, 171)" }}>
                            no account?
                        </NavLink>
                    </div>
                </Flex>
            </div>    
        </Flex>
    )
}