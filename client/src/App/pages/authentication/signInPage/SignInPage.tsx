import React, { useState } from 'react'
import { Flex } from '../../../components/grid/Flex'
import { Form } from '../../../components/forms/Form'
import { Input } from '../../../components/inputs/Input'
import { Button } from '../../../components/buttons/Button'
import { SignInForm, ChangeEvent, SubmitEvent } from '../../../types'
import { NavLink } from 'react-router-dom'
import { Range } from '../../../components/grid/Range'
import { Loader } from '../../../components/loaders/Loader'
import { loginQuery } from '../../../graphql/queries'

export const SignInPage: React.FC = () => {

    const [form, setForm] = useState<SignInForm>({
        email: '',
        password: ''
    })

    const [loading, setLoading] = useState(false)

    const submitHandler = async (event: SubmitEvent) => {
        event.preventDefault()

        setLoading(true)
        const data: any = await loginQuery(form)

        // data && data?.login

        console.log(data)
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
            <div className="w100">
                <Form styles={{ paddig: "10px" }} onSubmit={ submitHandler }>

                    <h3 style={{ margin: "2px 0 10px 0" }}>
                        Sign in
                    </h3>

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
                                    containerStyles={{ transform: "translateY(-5px)" }} 
                                /> 
                            :
                            "sign in"
                        }
                    </Button>
                </Form>


                <NavLink to="/sign-up">
                    <div className="minilink flex">no account?</div>
                </NavLink>
            </div>    
        </Flex>
    )
}