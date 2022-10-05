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
        <img width="200" src={commdevlogo} alt='alt text'></img>
        <h2>Clayton County Permits</h2>
        <hr ref={ref}/>
      </div>
      {/* <p>Click and type through the following prompts to figure out what you need to do to get your permit</p> */}
        <p>Before you begin, type the address of concern to verify that it is in Unincorporated Clayton County.</p>
      <div onClick={handleClick}>
        <TurnstoneSearch /> 
      </div>
    </div> 
  )
}