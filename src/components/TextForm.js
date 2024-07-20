import { text } from 'body-parser';
import React, { useState } from 'react'

export default function TextForm(props) {
    const[text1,setText]=useState("This is the text1");
    const handleClick=()=>
    {
        console.log("handleClick");
        const newText=text1.toUpperCase();
        setText(newText);
    }

    const handleClick1=()=>
    {
        const newText=text1.toLowerCase();
        setText(newText);
    }

    const handlecopy=()=>
    {
        navigator.clipboard.writeText(text1)
    }

    const handleClear=()=>
    {
        const newText="";
        setText(newText)
    }
    const handeSpeak=()=>
    {
        const utterance=new SpeechSynthesisUtterance(text1);
        const voices=speechSynthesis.getVoices();
        utterance.voice=voices[10];
        speechSynthesis.speak(utterance);
        //This is another way but here we cant change voice default voice will only be speaked
        // const utterance=new SpeechSynthesisUtterance();
        // utterance.text=text1;
        // window.speechSynthesis.speak(utterance);
    }

    const handleExtraSpace=()=>
    {
        let newText=text1.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleChange=(event)=>
    {
        console.log("On change");
        setText(event.target.value)
    }

    return (
<div>
<div className="mb-3">
    <label for="exampleFormControlTextarea1" className="form-label">{props.text}</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text1
    } onChange={handleChange}></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleClick}>Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleClick1}>Lowercase</button>
<button className='btn btn-primary mx-1' onClick={handleClear}>Clear</button>
<button className='btn btn-primary mx-1' onClick={handlecopy}>copy</button>
<button className='btn btn-primary mx-1' onClick={handeSpeak}>speak</button>
<button className='btn btn-primary mx-1' onClick={handleExtraSpace}>removeSpace</button>
<div className='mb-3'>
    <h2><b>Your text summary</b></h2>
    <p>{text1.split(" ").length-1} words and {text1.length} characters</p>
    <p>{0.08*(text1.split(" ").length-1)} to read</p>
    <h2><b>Preview</b></h2>
    <p>{text1}</p>
</div>
    </div>
    )
}
