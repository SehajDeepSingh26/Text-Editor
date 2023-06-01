/* 1. State=condition of any component for eg. textarea component might be empty sometime , sometimes it has letters .
   2. Hooks= A method which helps us to use features of classes in function based component this is because developer like us
        prefer to use function over classes.
   3. Hooks has this part ---->   const [count,setCount)=useState("Hello Universe");*/

/*  Here in above hook the value of count is Hello Universe . count is array variable so that we just can't update or change 
        its value like normal variable. 
    But we can update or change its value using setCount() method. i.e. setCount("Hey You"); this implies the value of count is updated to Hey You.     */


import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
            // console.log('Uppercase was clicked')
            let newText = text.toUpperCase();
            setText(newText)
    }
    const handleLoClick = () =>{
            // console.log('lowerCase was clicked')
            let newText = text.toLowerCase();
            setText(newText)
    }
    const handleClearClick = () =>{
            // console.log('lowerCase was clicked')
            let newText = '';
            setText(newText)
    }
    const handleReverseClick = () =>{
            // console.log('lowerCase was clicked')
            let textsplit = text.split('');             // convert to array from string
            textsplit.reverse();
            let newText = textsplit.join('');           // convert to string from array
            setText(newText);
    }

    const handleSpeakClick = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    
    const handleCopy = ()=>{
        var text = document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleOnChange = (event) =>{
            console.log('change was clicked');
            setText(event.target.value)         /* This will enable us to write in the textArea and get it displayed in the   
                                                     textArea */            
    }

    const [text,setText] = useState('');
    // text = "new Text";      --Wrong Way
    // setText("new Text");    --Correct way to change state

    return (
        <>
            <div className="container">
                    <h1>{props.heading}</h1>       {/* props --> Means this content will be provided on the main page / App.js  */}

                    <div className="mb-3 my-3">
                        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'grey':'white', color : props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
                    </div>

                    {/* Buttons --> */}
                    <button className="btn btn-outline-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-outline-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
                    <button className="btn btn-outline-primary mx-1" onClick={handleClearClick}>Clear text</button>
                    <button className="btn btn-outline-primary mx-1" onClick={handleReverseClick}>Reverse Text</button>
                    <button type='submit' className="btn btn-outline-primary mx-1" onClick={handleSpeakClick}>Speak Text</button>
                    <button type='submit' className="btn btn-outline-primary mx-1" onClick={handleCopy}>Copy Text</button>
                    
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{text.split(' ').length} words and {text.length} characters</p>
                <p>Time required to read: {0.008 * text.split(' ').length} minutes</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:'Enter some text in above textbox to preview it here'}</p>
            </div>
        </>
  )
}
