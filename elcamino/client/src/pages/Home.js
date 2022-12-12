import { TurnstoneSearch } from "../elements/Searchbox"
import  commdevlogo  from '../graphics/Commdevlogo.png'
import { useRef } from 'react'


export function Home() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
  return (
    <div className="home">
      <div className="home__preinfo">
        <img width="200" src={commdevlogo} alt='alt text'></img>
        <h2>Permit Assistant</h2>
        <hr ref={ref}/>
      </div>
      {/* <p>Click and type through the following prompts to figure out what you need to do to obtain a permit</p> */}
        <p>Before you begin, check the address of the project to verify that it is in Unincorporated Clayton County.</p>
      <div onClick={handleClick}>
        <TurnstoneSearch /> 
      </div>
    </div> 
  )
}