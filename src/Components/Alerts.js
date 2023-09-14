import React from 'react'   // using rfce

function Alerts(props) {
    const capitalize = (word)=>{
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
}
    return (
        props.alert && /* This will make sure above commands will run Only if there ios an alert. if Alert is null next commands will not run.*/        
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}                
            </div>
            
    )
}




export default Alerts
