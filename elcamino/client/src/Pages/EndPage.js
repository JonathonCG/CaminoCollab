import { useLocation } from "react-router-dom"
import { Questions } from "../elements/QuestionCardsInfo"
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export function EndPage() {
    const { id } = useParams();
    const navigate = useNavigate()

    return (
     <div className="endpageapp">
        <div id="endpagecard">
          <h1>{Questions[id].questionText}</h1>
          <h2>We can help with this. The resources you are looking for are available on Munis</h2>
          <h3><a href={Questions[id].endpagelink} target='blank'>Click here to view the permit you need on Munis</a></h3>
        </div>
        <div><button className="continuebutton" onClick={() => {return navigate('/')}}>Return to the homepage <img src=''></img></button></div>
    </div>
    )
}