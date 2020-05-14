import React, { useState } from 'react'
import './signUpPage.scss'
import { Form } from '../../../components/forms/Form'
import { Input } from '../../../components/inputs/Input'
import { SignUpForm, ChangeEvent, SubmitEvent } from '../../../types'
import { Button } from '../../../components/buttons/Button'
import { NavLink } from 'react-router-dom'
import { Flex } from '../../../components/grid/Flex'
import { useDispatch } from 'react-redux'
import { sendNewNotification, clearNotifications } from '../../../redux/actions/notifications.action'
import { createUserMutation } from '../../../graphql/mutations'
import { Loader } from '../../../components/loaders/Loader'
import { login } from '../../../redux/actions/auth.actions'

export const SignUpPage: React.FC = () => {

    const dispatch = useDispatch()

    const [form, setForm] = useState<SignUpForm>({
        name: '',
        email: '',
        password: ''
    })

    const [loading, setLoading] = useState(false)

    const onChange = (event: ChangeEvent) => {
        
        event.persist()

        setForm(prev => ({ 
                ...prev, 
                [event.target.name]: event.target.value 
            })
        )
    }

    const onSumbit = async (event: SubmitEvent) => {
        event.preventDefault()

        setLoading(true)

        try {
            const { data } = await createUserMutation(form)
            
            const res = data?.createUser

            res && res?.message !== "success" && dispatch(sendNewNotification({
                message: res?.message || 'app error',
                type: 'ERROR',
                id: Date.now()
            }, 5000))
    
            if (res && res?.message === "success") {
                
                dispatch(sendNewNotification({
                    type: 'SUCCESS',
                    message: 'user was created succesfully',
                    id: Date.now()
                }))
                
                // it's very important for great UX ;)
                setTimeout(() => {
                    dispatch(login(res.token))
                    dispatch(clearNotifications())
                }, 1500)
            }
            
            if (res && res?.message === "a user with such an email already exists") {
                dispatch(sendNewNotification({
                    type: 'WARNING',
                    message: res.message,
                    id: Date.now()
                }))
            }

            if (!(res && res?.message === "success")) {
                setLoading(false)
            }
            

        } catch (e) {
            dispatch(sendNewNotification({
                id: Date.now(),
                message: "connection failed",
                type: "ERROR"
            }))

            setLoading(false)
        }

        setForm({
            name: '',
            email: '',
            password: ''
        })
    }
    
    return (
        <Flex className="signUpPage h8 w100">
            <div className="w100 p1h">
                <Form styles={{ paddig: "10px" }} onSubmit={ onSumbit }>
                    
                    <h2 style={{ margin: "2px 0 10px 0" }}>
                        Registration
                    </h2>

                    <Input 
                        type="text"
                        name="name"
                        value={ form.name }
                        onChange={ onChange } 
                        required={ true }
                        placeholder="name"
                    />

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

                    <Button>
                        { loading ?
                                <Loader 
                                    color={ "white" } 
                                    containerStyles={{ transform: "translateY(-6px)" }} 
                                /> 
                            :
                            "create accaunt"
                        }
                    </Button>
                </Form>

                <Flex className="w100 flex">
                    <div className="minilink flex">
                        <NavLink to="/sign-in" style={{ color: "rgb(171, 171, 171)" }}>
                            already have an account?
                        </NavLink>
                    </div>
                </Flex>
            </div>    
        </Flex>
    )
}