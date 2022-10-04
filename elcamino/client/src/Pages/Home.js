import { TurnstoneSearch } from "../elements/Searchbox"
import { Cards } from "../elements/QuestionCards"
import { AddressSearchRedirect } from '../AddressSearchRedirect'
import  commdevlogo  from '../graphics/Commdevlogo.png'
import { useRef } from 'react'


export function Home() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
    return (
    <div className="App">
    <div className="preinfo">
    <h1>Community Development's Permitting Wizard</h1>
    <img className="logo" src={commdevlogo} alt='alt text'></img>
    
    <hr ref={ref}/>
    </div>
    <p>Before you begin, verify that your address is in Unincorporated Clayton County.</p>
    <div onClick={handleClick}>
    <TurnstoneSearch /> 
    </div>
  </div> 
    )
}