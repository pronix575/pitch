import React from 'react'
import './input.scss'
import { ChangeEvent } from '../../../types'
import { getRandomId } from '../../../scripts/scripts'

interface IInput {
    placeholder?: string
    value: string
    onChange: (event: ChangeEvent) => void
    type?: string
    id?: string
    name: string
    required?: boolean
}

export const Input: React.FC<IInput> = ({ 
    placeholder, 
    value, 
    onChange, 
    type, 
    id, 
    name, 
    required 
}) => 
    
    <input
        name={ name }
        type={ type || '' } 
        id={ id || getRandomId() }
        className="input" 
        placeholder={ placeholder || '' } 
        value={ value || '' } 
        onChange={ onChange }
        autoComplete="off"
        required={ required || false }
    />