import React from 'react'
import Turnstone from 'turnstone'
import styles from './SearchBox.css'
// const styles = {
  // input: 'border p-2 bg-black w-full',
  // listbox: 'border p-2 bg-white w-full',
  // listbox: 'border-bottom: 1px solid #ddd',
  // listbox: 'border-left: 1px solid #ddd',
  // listbox: 'border-right: 1px solid #ddd',
  // listbox: 'padding: 5px 10px',
  // listbox: 'background-color: rgb(129, 41, 41)',
  // listbox: 'width: 100%'
  // 
// }
// 
// Set up listbox contents.
const listbox = {
  name: "Addresses",
  displayField: 'fulladdr',
  data: (query) =>
    fetch(`/addr?q=${encodeURIComponent(query)}`)
      .then(res => res.json()),
}

export function BasicExample() {
  return (<Turnstone id="autocomplete" matchText={true} listbox={listbox}  typeahead={false} styles={styles}/>);
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