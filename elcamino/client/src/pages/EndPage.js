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
      return <div className="end-confirmed"><a href={Questions[id].endpagelink} target='blank'>Continue to the permit application in Citizen Self Service </a></div>
      
    }
    return <div className="end-unconfirmed"><p>Continue to the permit application in Citizen Self Service</p></div>
  }
  console.log(useParams().id)
  console.log(id)
  console.log(Questions[id].id)
  return (
    <div className="endpage">
      <div id="endpage__card">
        <h1>{Questions[id].questionText}</h1>
        <h2>We can help with this. The resources you are looking for are available in Citizen Self Service</h2>
          <hr></hr>
        <p className="endpage-p">Below are the requirements you will need <em>before</em> applying for your permit. You will need to present these during the permitting process.</p>
        
        
        <ol> 
        {requirementGroups[Questions[id].id].map((reqs) => (
          <li>{prereqs[reqs]}</li>
        ))}
        </ol>
        
        <div className={` ${isChecked ? "endpage-acknowledgement-yes":"endpage-acknowledgement-no"}`}onClick={handleChange}>
        <input type="checkbox" className="larger" checked={isChecked}></input>
        <p className="">I have read the requirements and acknowledge that I have completed/acquired them prior to my application</p>
        </div>
        
        
        

          
          <h3><ContinueButton ischecked={isChecked} /></h3>
          
        </div>
        <div><button className="continuebutton-endpage" onClick={() => {return navigate('/assistant')}}>Go back</button></div>
    </div>
    )
}

// <input type="checkbox" id={reqs} checked={isChecked} onChange={handleChange} />