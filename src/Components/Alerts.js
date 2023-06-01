import React from 'react'   // using rfce

function Alerts(props) {
    return (
        <div>
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                {props.Alerts}
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    )
}

export default Alerts
