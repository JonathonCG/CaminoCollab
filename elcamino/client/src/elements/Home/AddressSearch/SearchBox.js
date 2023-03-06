import React,{useCallback, useRef, useState} from 'react'
import Turnstone from 'turnstone'
import { AddressSearch } from './AddressSearch'
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


export function SearchBox() {
  // selected result is the name of the database field that the search returned
  const [isInClaytonCounty, setIsInClaytonCounty] = useState('');
  const [zone, setZone] = useState('');
  const [addrNum, setAddrNum] = useState(null);
  const [parcelID, setParcelID] = useState('');

  const onSelect = useCallback(
    (query, selectedResult) => {
      if (query !== undefined && query !== null) {
        setAddrNum(query.addrnum)
        setIsInClaytonCounty(query.withinname)
        setZone(query.zone)
        setParcelID(query.parcelid)
      }
    }, 
  )
  
  return  (
    <div>
      <div className='centerdiv'>
        <Turnstone 
        id="autocomplete" 
        matchText={true} 
        listbox={listbox}  
        typeahead={false} 
        styles={styles} 
        onSelect={onSelect} />
      </div>
      <div className='addresssearchredirect'>
        <AddressSearch 
        addrNum={addrNum}
        isInClaytonCounty={isInClaytonCounty} 
        zone={zone} 
        parcelID={parcelID}
        />
      </div>
    </div>
    );
 }