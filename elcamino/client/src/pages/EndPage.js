import { useLocation } from "react-router-dom"
import { Questions } from "../elements/QuestionCardsInfo"
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { requirementGroups } from "../elements/QuestionCardsInfo";
import { prereqs } from "../elements/QuestionCardsInfo";
import { useState } from "react";
export function EndPage() {
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
      return <p>other</p>
    }


    return (
     <div className="endpage">
        <div id="endpage__card">
          <h1>{Questions[id].questionText}</h1>
          <h2>We can help with this. The resources you are looking for are available on EnerGov</h2>
          <p>Below are the requirements for your license, please make sure you have all of them completed <em>before</em> submitting your application through EnerGov</p>
          <ol> {/**list of requirements from the requirement groups array of arrays in questioncardsinfo.js */}
          {requirementGroups[Questions[id].requirements].map((reqs) => (
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