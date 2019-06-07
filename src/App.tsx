import React, { useState, useEffect, Suspense } from 'react';
import './App.css';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';
import { BarLoader as Loader } from 'react-spinners'
import Navigator from './component/Navigator'

const serviceUrl = `http://localhost:3082`

const getLoadingComponent = (isLoading: boolean) => {
  return <div style={{position: 'fixed', top: '45%', left: '45%' }}><Loader loading={isLoading} color={'#c00'} /></div>
}

const getApplicationComponent = (onError: (error: any, message: string) => void) => {
  return (
    <Suspense fallback={'Loading...'}>
      <Navigator onError={onError} serviceUrl={serviceUrl} />
    </Suspense>
  )
}

const App: React.FC = () => {
  const [isLoading, setLoading] = useState(true)
  const [errorMessages, setErrorMessages] = useState<string[]>([])

  const errorHandler = (error: any, message: string) => {
    console.log(`Failed: error ${error} Message: ${message}`)
    setErrorMessages(prevState => ([message, ...prevState]))
  }

  useEffect(() => {
    setTimeout(() => setLoading(false) , 2000)
  }, [])

  return (
    <div>
      {isLoading ? getLoadingComponent(isLoading) : getApplicationComponent(errorHandler)}

      <Dialog
        open={errorMessages.length > 0}
        onClose={event => setErrorMessages([])}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description" >

        <DialogTitle id="alert-dialog-title">{"Error message"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Error!
            {errorMessages.join("\n")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={(event) => setErrorMessages([])} color="primary">
            Close
                    </Button>
        </DialogActions>
      </Dialog>
    </div>

  )
}

export default App;
