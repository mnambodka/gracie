import React, { useState } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import classNames from 'classnames'

import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DashboardIcon from '@material-ui/icons/Dashboard'

import WelcomePage, { URL as WelcomePageUrl } from '../page/WelcomePage'

import Header from './Header'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@material-ui/core/styles'
import { Link as RouterLink } from 'react-router-dom'
import { useStyles } from '../ThemeUtilities'
import { PageProps } from '../page/PageProps';


const Navigator = (props: PageProps) => {

    const {  onError, serviceUrl } = props

    const [openMenu, setOpenMenu] = useState<boolean>(true)

    const classes = useStyles()
    const theme = useTheme()
    const { t } = useTranslation()

    const handleDrawerOpen = () => {
        setOpenMenu(true)
    }

    const handleDrawerClose = () => {
        setOpenMenu(false)
    }


    return (
        <BrowserRouter>
            <div className={classes.root}>
                <div>Navigator</div>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: openMenu,
                    }, classes.appBar)}
                >
                    <Toolbar disableGutters={!openMenu}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={handleDrawerOpen}
                            className={classNames(classes.menuButton, openMenu && classes.hide)}
                        >
                            <MenuIcon />

                        </IconButton>

                        <Header seriveUrl={serviceUrl} />
                    </Toolbar>
                </AppBar>

                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={openMenu}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon htmlColor={'white'} /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>

                    <Divider />
                    <List component="nav">
                        <ListItem button component={RouterLink} to={WelcomePageUrl} key={'welcome-page'} >
                            <ListItemIcon className={classes.navigationListItemIcon}><DashboardIcon /></ListItemIcon>
                            <ListItemText primary={t('page.welcome.title')} classes={{ primary: classes.navigationListItemText }} />
                        </ListItem>
                    </List>
                    <Divider />
                </Drawer>

                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: openMenu,
                    })}
                >
                    <div className={classes.drawerHeader} />

                    <div>

                        <Switch >
                            <Route path={WelcomePageUrl} exact render={ (props) => <WelcomePage />} />
                        </Switch>

                    </div>

                </main>
            </div >
        </BrowserRouter >

    )
}

export default Navigator