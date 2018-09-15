import React from 'react'
import {ButtonWrapper, ButtonLink} from './style'


const Button = (props) => {
    if(props.to) {
        return <ButtonLink {...props} />
    } else {
        return <ButtonWrapper {...props} />
    }
}
export default Button