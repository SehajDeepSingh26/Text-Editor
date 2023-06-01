
import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/NavBar';
import TextForm from './Components/TextForm';

function App() {

    const [mode, setMode] = useState('light') // whether dark mode is enabled or not

    const toggleMode = ()=>{
        if(mode === 'light'){
            setMode('dark');
            document.body.style.backgroundColor = 'grey';
            document.body.style.color = 'white';
        }
        else{    
            setMode('light')
            document.body.style.backgroundColor = 'white'
            document.body.style.color = 'black'
        }
    }

  return (                                    // Everything should be included in 1 tag only, so we use JSX tag <> </>
    <>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
        {/* <Navbar/>       This will enter default values for ytitle and aboutText. */}

        <div className="container" mode={mode}>
            <TextForm heading="Enter your text to analyse" mode={mode}/>
            {/* <About/> */}
        </div>
    </>
  );
}

export default App;
