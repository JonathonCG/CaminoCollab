import React, { useState } from 'react'
import Turnstone from 'turnstone'
import { AddressSearch } from './AddressSearch'
import styles from './SearchBox.css'
import { StyledGridContainer, StyledGridItem } from '@nextui-org/react'

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
  const [addrNum, setAddrNum] = useState(null);
  const [addr, setAddr] = useState('')
  const [isInClaytonCounty, setIsInClaytonCounty] = useState('');
  const [zone, setZone] = useState('');
  // const [parcelID, setParcelID] = useState('');

  const onSelect = ((query) => {
      if (query !== undefined && query !== null) {
        setAddrNum(query.addrnum)
        setAddr(query.fulladdr)
        setIsInClaytonCounty(query.withinname)
        setZone(query.zone)
        // setParcelID(query.parcelid)
      }
    })
  
  return  (
    <StyledGridContainer justify="center">
      <StyledGridItem justify="center">
        <Turnstone 
        id="autocomplete" 
        matchText={true} 
        listbox={listbox}  
        typeahead={false} 
        styles={styles} 
        onSelect={onSelect} />
      </StyledGridItem>
      <StyledGridItem justify="center">
        <AddressSearch 
        addrNum={addrNum}
        addr={addr}
        isInClaytonCounty={isInClaytonCounty} 
        zone={zone} />
      </StyledGridItem>
    </StyledGridContainer>
    );
 }