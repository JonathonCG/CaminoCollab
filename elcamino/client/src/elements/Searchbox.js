import React,{useState} from 'react'
import Turnstone from 'turnstone'
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
  return  (
    <>
      <Turnstone id="autocomplete" matchText={true} listbox={listbox} typeahead={false} styles={styles} />
    </>
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