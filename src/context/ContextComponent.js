import React, { useContext } from 'react'
import { ThemeContext } from '../App'

function ContextComponent() {
    const theme = useContext(ThemeContext)

    const themeStyle = {
        backgroundColor: theme === '#f76301' ? '#f76301' : '#000',
        color: theme === 'f76301' ? '#000' : '#f76301',
        padding: '15px',
        margin: '10px'
    }
    return (
        <div style={themeStyle}>
        </div>
    )
}

export default ContextComponent