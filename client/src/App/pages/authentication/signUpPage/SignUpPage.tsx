import React, { useState } from 'react'
import './signUpPage.scss'
import { Form } from '../../../components/forms/Form'
import { Input } from '../../../components/inputs/Input'
import { SignUpForm, ChangeEvent } from '../../../types'
import { Button } from '../../../components/buttons/Button'
import { NavLink } from 'react-router-dom'
import { Flex } from '../../../components/grid/Flex'

export const SignUpPage: React.FC = () => {

    const [form, setForm] = useState<SignUpForm>({
        name: '',
        email: '',
        password: ''
    })

    
    const onChange = (event: ChangeEvent) => {
        
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
                <Form styles={{ paddig: "10px" }}>
                    
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

                    <Button>create accaunt</Button>
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