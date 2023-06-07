import React , {useState} from 'react'

export default function TextFrom(props) {
     const [text, setText] = useState("")
     // setText("New");
     const UpCase = () => {
          // console.log("UpperCase")
          if(text === ""){
               // console.log("abcd")
               alert("Please Enter the valid sentence")
          }else if(text >= 0){
               alert("Must enter the valid sentence")
          }else{
               const up = text.toUpperCase();
               setText(up)
          }
     }
     const Clear = () => {
          if(text === ""){
               alert('There is no word in the textarea')
          }else {
               setText('');
          }
     }
     const LowerCase = () => {
          // console.log("LowerCase")
          // setText("you have clicked on lowercase button")
          if(text === ""){
               // console.log("abcd1")
               alert("Please Enter the valid sentence")
          }else if(text >= 0){
               alert("Must enter the valid sentence")
          }else{
               const lower = text.toLowerCase();
               setText(lower) 
          }
     }

     // const Copy = () => {
     //      const Copy = document.getElementById('Box')
     //      Copy.select()
     //      navigator.clipboard(Copy.value)
     // }
     const Change = (event) => {
          setText(event.target.value)
     }
     const ExtraSpce = () => {
          let nextText = text.split(
               /[ ]+/
          )
          setText(nextText.join(" "))
     }
     return (
     <>
     <div className="mb-3" style={{color: props.mode === 'dark'?'white':'#042743', height: '250px'}}>
          <h2>{props.headline}</h2>
          <label htmlFor="Box" className="form-label"></label>
          <textarea className="form-control" value={text} onChange={Change} id="Box" rows="7" style={{color: props.mode === 'dark'?'white':'#042743', backgroundColor: props.mode === 'dark'?'grey':'white'}}></textarea>
     </div>
     <button disabled={text.length===0} onClick={UpCase} className="btn btn-primary mx-2">
          Convert to UpperCase
     </button>
     <button disabled={text.length===0} onClick={LowerCase} className="btn btn-primary mx-2">
          Convert to LowerCase
     </button>
     <button disabled={text.length===0} onClick={Clear} className="btn btn-primary mx-2">
          Clear
     </button>
     {/* <button onClick={Copy} className="my-2 btn btn-primary mx-2">
          Copy
     </button> */}
     <button disabled={text.length===0} onClick={ExtraSpce} className="my-2 btn btn-primary mx-2">
          Remove Extra Space
     </button>
     <div className="my-3 container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
          <h2>Your Text Summary</h2>
          <p>
               {/* if(text === "Enter the Text"){
                    
               }else{
                    {{{text.split(" ").length} words and {text.length} Characters}
               } */}
               {text === ""?(text.split(" ").length)-1:(text.split(" ").length)} words and {text === " "?0:text.length} Characters
          </p>
          <p>{0.008 * text.split(" ").filter((e)=>{return e.length!==0}).length} minutes to read</p>
          <h2>Preview</h2>
          <p>{text.length === 0?'Please enter something to preview it in any mode':text}</p>
     </div>
     </>
     )
}
