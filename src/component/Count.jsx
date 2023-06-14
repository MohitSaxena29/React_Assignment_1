import React from 'react';
import '../App.css';

const Count =(props)=>{    
    return(
        <>
            <p className="display-count">The number of times Display Details Button is clicked : {props.countChange}</p>
        </>
    )
}
export default Count;