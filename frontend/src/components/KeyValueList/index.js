import React from 'react'
import {KeyValueTable} from './style'


const KeyValueList = ({pairs}) => (
    <KeyValueTable>{
        pairs && Object.keys(pairs).map((key, idx) => (
        <tr key={idx}>
            <th>{key}</th><td>{pairs[key]}</td>
        </tr>
        ))
    }</KeyValueTable>
)

export default KeyValueList