import React from 'react'
import { Dropdown } from 'semantic-ui-react'

// TODO: This is missing functionality for sub-menu here from SUI core examples.
// The "Publish To Web" item should contain a sub-menu.

const options = [
    { key: 1, text: 'Feuerwehr Andernach', value: 1 },
    { key: 2, text: 'Gutenberg Gymnasium Mainz', value: 2 },
    { key: 3, text: 'KITA Sonnengruss', value: 3 },
  ]
  
  const DropdownExampleUncontrolled = () => (
    <Dropdown className="comboBox" selection options={options} placeholder='My Location' />
  )

export default DropdownExampleUncontrolled
