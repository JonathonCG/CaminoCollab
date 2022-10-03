import { TurnstoneSearch } from "../Searchbox"
import { Cards } from "../Navigation/QuestionCards"
import {AddressSearchResults} from '../Addressearch'
export function Home() {
    return (
    <div className="App">
    <div className="preinfo">
    <AddressSearchResults />
    <h1>Check your address</h1>
    <p>Before starting, please check your address to verify that your project will take place in unencorporated clayton county</p>
    <hr />
    </div>
    <TurnstoneSearch /> 
     <Cards /> 
  </div> 
    )
}