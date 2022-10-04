import { TurnstoneSearch } from "../elements/Searchbox"
import { Cards } from "../elements/QuestionCards"
import { AddressSearchRedirect } from '../AddressSearchRedirect'
import  commdevlogo  from '../graphics/Commdevlogo.png'
export function Home() {
    return (
    <div className="App">
    <div className="preinfo">
    <h1>Community Development's Permitting Wizard</h1>
    <img className="logo" src={commdevlogo} alt='alt text'></img>
    
    <hr />
    </div>
    <p>Before you begin, verify that your address is in Unincorporated Clayton County</p>
    <TurnstoneSearch /> 
    
  </div> 
    )
}