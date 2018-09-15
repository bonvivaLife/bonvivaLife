import React from 'react'
import {SwitchRowContainer} from './style'
import Toggle from 'react-toggle'
import "react-toggle/style.css"

const SwitchRow = ({label, subLabel, checked, onChange}) => (
    <SwitchRowContainer>
        <div>
            <strong>{label}</strong><br/>
            <span>{subLabel}</span>
        </div>
        <Toggle checked={checked} onChange={onChange} icons={false}/>
    </SwitchRowContainer>
)

export default SwitchRow