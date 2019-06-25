import React, { useState, Component} from 'react'

import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import MyPageRouter from '../component/MyRouter'
import Routes from '../component/Routes'

import Header from './Header'
import { useTheme } from '@material-ui/core/styles'
import { Link as RouterLink } from 'react-router-dom'
import { PageProps } from '../page/PageProps';
import logo from './ukrlp_background.png';
import './Styles.css';
import MyBaseFormular from '../page/BaseFormular'

const Navigator = (props: PageProps) => {

    const {  onError, serviceUrl } = props

    const [openMenu, setOpenMenu] = useState<boolean>(true)
    const theme = useTheme()

    return (
        <BrowserRouter>
            <div>
                <Routes/>
                <main>
                    <div>
                    <MyPageRouter/>
                    <img width="100%" src={logo} alt="Logo"/>
                    </div>
                </main>
            </div >
        </BrowserRouter >
    )
}

export default 
    Navigator
