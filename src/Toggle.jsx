import React from 'react'

export const Toggle = ({ theme, toggleTheme }) => { 
    return (
        <div onClick={toggleTheme}>
            { theme === 'light' ? <i class="fal fa-lightbulb-on"></i> : <i class="fal fa-moon-stars"></i>}
            
        </div>
    )
}
