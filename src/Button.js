import React from 'react'

function Button (props){
    const number = 0 ;
    return <div>
        <button onClick={()=>{
            props.updateCount(number)
        }}>Clicked {props.count} times</button>
    </div>
}
export default Button;