import React from 'react'
import { Redirect, BrowserRouter, Route, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FaExclamationCircle } from 'react-icons/fa'
import MyBaseFormular from '../page/BaseFormular'

class MyRouter extends React.Component {
    state = {
        toFormular: false,
    }
      
    handleSubmit = () => {
        this.setState(() => ({
            toFormular: true
        }));
        const url = 'baseFormular';
        window.open(url);
      }

render () {  
    return (
       <div>
        <button className="buttonStyle" onClick={this.handleSubmit}> Anlass melden  <FaExclamationCircle/></button>
       </div>
    )
  }
}

export default MyRouter