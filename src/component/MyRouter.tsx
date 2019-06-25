import React from 'react'
import { Redirect, BrowserRouter, Route, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FaExclamationCircle } from 'react-icons/fa'
import MyBaseFormular from '../page/BaseFormular'

const routes = (
    <Route >
        <Route exact path="/baseFormular" component={MyBaseFormular}/>
    </Route >
)

class MyRouter extends React.Component {
    state = {
        toFormular: false,
    }
      
    handleSubmit = () => {
        this.setState(() => ({
            toFormular: true
        }));
        const url = 'baseFormular';
        window.open(url, '_blank');
      }

render () {
    // if (this.state.toFormular === true) {
    //     return (
    //         <BrowserRouter>
    //         <div>
    //             <main>
    //             <div>
    //                 <Redirect to='/baseFormular' />
    //                 <text>Hello</text>
    //             </div>
    //             </main>
    //         </div >
    //     </BrowserRouter >            
    //     )
    // }
  
    return (
       <div>
        <button className="buttonStyle" onClick={this.handleSubmit}> Anlass melden  <FaExclamationCircle/></button>
       </div>
    )
  }
}

export default MyRouter