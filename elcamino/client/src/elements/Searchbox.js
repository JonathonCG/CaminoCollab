import React,{useCallback, useRef, useState} from 'react'
import Turnstone from 'turnstone'
import { AddressSearchRedirect } from '../AddressSearchRedirect'
import styles from './SearchBox.css'

// const styles = {
  // input : 
// }

// Set up listbox contents.
const listbox = {
  name: "Addresses",
  displayField: 'fulladdr',
  data: (query) =>
    fetch(`/addr?q=${encodeURIComponent(query)}`)
      .then(res => res.json()),
}


export function TurnstoneSearch() {
  // selected result is the name of the database field that the search returned
  // query
  const [isInClaytonCounty, setIsInClaytonCounty] = useState(0);
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
  const onSelect = useCallback(
    (query, selectedResult) => {
      if (query !== undefined && query !== null) {
        console.log('query is ---')
        console.log(query)
        console.log('search result is ---' + selectedResult);
        // setIsInClaytonCounty(query.withinname === undefined || query.withinname === null)
        setIsInClaytonCounty(query.withinname)
        console.log('isInClaytonCounty is ---' + isInClaytonCounty);
        //<AddressSearchRedirect isInClaytonCounty={isInClaytonCounty}/>
      }
    }, 
  )

  
  return  (
  <div>
  <div className='centerdiv' onClick={handleClick}>
  <Turnstone id="autocomplete" matchText={true} listbox={listbox}  typeahead={false} styles={styles} onSelect={onSelect} />
  </div>
  <div className='addresssearchredirect'>
  <AddressSearchRedirect isInClaytonCounty={isInClaytonCounty} />
  </div>
  </div>
  );
 }

// const styles = {
  // input: 'border p-2 bg-white w-full',
  // listbox: 'border p-2 bg-white w-full'
// }
// 
// Set up listbox contents.
// const listbox = {
  // displayField: 'name',
  // data: (query) =>
    // fetch(`/addr?q=${encodeURIComponent(query)}&limit=10`)
      // .then(res => res.json())
// }
// 
// export function BasicExample() {
  // return <Turnstone id="autocomplete" listbox={listbox} styles={styles} typeahead={false} />
// }