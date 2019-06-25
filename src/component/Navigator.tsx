import React, { useState, Component} from 'react'

import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'

import Routes from '../component/Routes'

import Header from './Header'
import { useTheme } from '@material-ui/core/styles'
import { Link as RouterLink } from 'react-router-dom'
import { PageProps } from '../page/PageProps';

import './Styles.css';


const Navigator = (props: PageProps) => {

    const {  onError, serviceUrl } = props

    const [openMenu, setOpenMenu] = useState<boolean>(true)
    const theme = useTheme()

    return (
        <BrowserRouter>
            <div>
                <Routes/>
                
            </div >
        </BrowserRouter >
    )
}

export default 
    Navigator
