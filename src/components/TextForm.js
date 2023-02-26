
import React, {useState} from 'react'


export default function TextForm(props) {
    const uppercaseButton = () => {
        console.log('UPPERCASE' + text);

        let newText = text.toUpperCase;
        setText(newText );
    }

    const handleOnChange = (e) => {
        setText(e.target.value)
    }
    const [text, setText] = useState('Enter text here...');
  return (
    <div>
        <h1 className="my-3">{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={uppercaseButton}>Convert to uppercase</button>
    </div>
  )
}
