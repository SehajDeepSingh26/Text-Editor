import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            {/* <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li> */}
            
            </ul>
            {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
            </form> */}
            <div className = {`black custom-control custom-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input type="checkbox" onClick={props.BWtoggleMode} className="custom-control-input" id="customSwitch1"/>
                <label className="custom-control-label" htmlFor="customSwitch1">Enable dark mode</label>
            </div>
            {/* <div className = {`Borwn-yellow mx-2 custom-control custom-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input type="checkbox" onClick={props.YBtoggleMode} className="custom-control-input" id="customSwitch1"/>
                <label className="custom-control-label" htmlFor="customSwitch1">Brown-Yellow mode</label>
            </div>
            <div className = {`orange-forestGreen mx-2 custom-control custom-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input type="checkbox" onClick={props.OGtoggleMode} className="custom-control-input" id="customSwitch1"/>
                <label className="custom-control-label" htmlFor="customSwitch1">Orange-green mode</label>
            </div> */}
        </div>
    </nav>
  )
}

Navbar.propTypes = {title: PropTypes.string.isRequired,
                    aboutText: PropTypes.string}

Navbar.defaultProps = {
    title: 'set title here',
    aboutText: 'About text here'
}
