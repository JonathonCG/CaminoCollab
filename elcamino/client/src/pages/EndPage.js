import { useLocation } from "react-router-dom"
import { Questions } from "../elements/QuestionCardsInfo"
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { requirementGroups } from "../elements/QuestionCardsInfo";
import { prereqs } from "../elements/QuestionCardsInfo";
import { useState } from "react";
export function EndPage() {
  document.title = "Permit Assistant End Page"

  const { id } = useParams();
  const navigate = useNavigate()
  const [isChecked, setIsChecked] = useState(false); /**State setting for the checkbox */
  const handleChange = () => { /* handleChange changes the "isChecked" back and forth from true to false dependong on if the box is checked */
    setIsChecked(!isChecked);
  }
  function ContinueButton({ischecked}) { /* Function changes what is displayed in the continue button element based on if "ischecked" is true or false */
    if(ischecked){
      return <a href={Questions[id].endpagelink} target='blank'>Click here to view the permit you need on EnerGov</a>
    }
    return <a target='blank'>Confirm you have read and understand the above before proceeding</a>
  }
  console.log(useParams().id)
  console.log(id)
  console.log(Questions[id].id)
  return (
    <div className="endpage">
      <div id="endpage__card">
        <h1>{Questions[id].questionText}</h1>
        <h2>We can help with this. The resources you are looking for are available on EnerGov</h2>
        <p>Below are the requirements you will need <em>before</em> applying for your license, you will need to present these during the process.</p>
        <ol> 
        {requirementGroups[Questions[id].id].map((reqs) => (
          <li>{prereqs[reqs]}</li>
        ))}
        </ol>
        
        <input type="checkbox" onChange={handleChange}></input><p>I have read the requirements and acknowledge that I have completed them prior to my application</p>
        
        <p>{console.log(isChecked)}</p>
        
        

        
        <h3><ContinueButton ischecked={isChecked} /></h3>
        
      </div>
      <div><button className="continuebutton" onClick={() => {return navigate('/')}}>Return to the homepage <img src=''></img></button></div>
  </div>
  )
}

// <input type="checkbox" id={reqs} checked={isChecked} onChange={handleChange} />