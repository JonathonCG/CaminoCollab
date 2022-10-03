import { TurnstoneSearch } from "../elements/Searchbox"
import { Cards } from "../elements/QuestionCards"
import { AddressSearchResults } from '../Addressearch'

export function Home() {
    return (
    <div className="App">
    <div className="preinfo">
    <AddressSearchResults />
    <h1>Check your address</h1>
    <p>Before you begin, verify that your address is in Unincorporated Clayton County</p>
    <hr />
    </div>
    <TurnstoneSearch /> 
     <Cards /> 
  </div> 
    )
}