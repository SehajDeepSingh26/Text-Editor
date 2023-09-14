
import { useState } from 'react';

import './App.css';
import Navbar from './Components/NavBar';
import TextForm from './Components/TextForm';
import Alerts from './Components/Alerts';
// import About from './Components/About';     // using react-router-dom

import React from "react";
// import {
//     BrowserRouter,
//     Routes,
//     Route,
//   } from "react-router-dom";


function App() {

    const [mode, setMode] = useState('light') // whether dark mode is enabled or not

    const [alert, setAlert] = useState(null);

    const showAlert = (message, type)=>{
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null)
        }, 1500);
    }

    const BWtoggleMode = ()=>{
        if(mode === 'light'){
            setMode('dark');
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
            showAlert("dark mode has been enabled", "success");

            // document.title = 'TextUtils - Dark Mode';
            setInterval( () =>{
                document.title = 'TextUtils is Amazing !!';
            },2000)
            setInterval( () =>{
                document.title = 'Install TextUtils Now !!';
            },1500)
        }
        else{    
            setMode('light')
            document.body.style.backgroundColor = 'white'
            document.body.style.color = 'black'
            showAlert("Light mode has been enabled", "success");

            document.title = 'TextUtils - Light Mode'
        }
    }
    /*const YBtoggleMode = ()=>{ if(mode === 'light'){ setMode('dark'); document.body.style.backgroundColor = '#432701'; document.body.style.color = 'yellow'; showAlert("Yellow-brown mode has been enabled", "success"); } else{ setMode('light') document.body.style.backgroundColor = 'white' document.body.style.color = 'black' showAlert("Light mode has been enabled", "success"); } } 
    const OGtoggleMode = ()=>{ if(mode === 'light'){ setMode('dark'); document.body.style.backgroundColor = '#1A4314'; document.body.style.color = 'orange'; showAlert("dark mode has been enabled", "success"); } else{ setMode('light') document.body.style.backgroundColor = 'white' document.body.style.color = 'black' showAlert("Light mode has been enabled", "success"); } }*/

  return(                                     // Everything should be included in 1 tag only, so we use JSX tag <> </>
    <>
        {/* <BrowserRouter> */}
            {/* <Navbar/>       This will enter default values for title and aboutText. */}
           <Navbar title="TextUtils" aboutText="About Us" mode={mode} BWtoggleMode={BWtoggleMode}  />
           {/* /*YBtoggleMode={YBtoggleMode} OGtoggleMode={OGtoggleMode}*/  }
            
            <Alerts alert={alert}/>

            <div className="container" mode={mode}>
                {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}

                {/* <Routes>                               //*This is imported/copied from ReactRouter.com/web/guides/quick-start */}
                    {/* <Route exact path="/about" element={<About />} />
                    <Route exact path="/" element={ */}
                    <TextForm showAlert={showAlert} heading="Enter your text to analyse" mode={mode}/>
                    {/* } /> */}
                    
                        {/*
                                /users     --> Respnds to /user/text as well
                                /user/text 

                                To prevent this we write "exact path" in Route tag.
                        */}
                {/* </Routes> */}
            </div>
        {/* </BrowserRouter>               Above code including Switch must be included in Router tag. */}

        
    </>
  )
  
}

export default App;
