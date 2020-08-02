
import React from 'react'



export default props =>
    <div>
       
        {React.Children.map(props.children, Arena => {
            return React.cloneElement(Arena, { ...props });
        })}
    </div>