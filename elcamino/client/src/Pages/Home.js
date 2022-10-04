import { TurnstoneSearch } from "../elements/Searchbox"
import { Cards } from "../elements/QuestionCards"
import { AddressSearchRedirect } from '../AddressSearchRedirect'

export function Home() {
    return (
    <div className="App">
    <div className="preinfo">
    
    <h1>Check your address</h1>
    <p>Before you begin, verify that your address is in Unincorporated Clayton County</p>
    <hr />
    </div>
    <TurnstoneSearch /> 
    <Cards />
  </div> 
    )
}