import React, { useState } from 'react'
import { Grid, IconButton, Avatar, makeStyles, Popper, Paper, Grow, ClickAwayListener, MenuList } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import { deepPurple } from '@material-ui/core/colors'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center',
    },
    avatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepPurple[500],
        textTransform: 'uppercase'
    },
    applicationsButton: {
        color: '#549bd7',
        background: '#f9f9f9'
    },
})

export interface HeaderProps {
    seriveUrl: string,
}

const Header = (props: HeaderProps) => {

    const classes = useStyles()

    const [applicationAnchor, setApplicationAnchor] = useState<HTMLElement | null>(null)
    const [showUserMenu, setShowUserMenu] = useState<boolean>(false)
    const anchorAvatarRef = React.useRef<HTMLDivElement>(null)

    const { t } = useTranslation()

    const handleCloseUserMenu = (event: any) => {
        setShowUserMenu(false)
    }

    const handleClickAvatar = (event: any) => {
        setShowUserMenu(prev => !prev)
    }

    const showApplications = applicationAnchor !== null

    return (
        <React.Fragment>
            <Grid item xs={4}>
                <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="center">
                    <IconButton color="default" >
                        <HomeIcon />
                        {/* <SvgCross width="50px" height="50px" /> */}
                    </IconButton>
                </Grid>
            </Grid>
            <Grid item xs={4} >
                <Grid container direction="row" justify="center" alignItems="center">
                    <div> Gracie </div>
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <Grid container
                    direction="row"
                    justify="flex-end"
                    alignItems="center">
                    <Grid item>
                        <Avatar className={classes.avatar} onClick={handleClickAvatar} ref={anchorAvatarRef}>RC</Avatar>
                    </Grid>
                    <Grid>
                        <Popper open={showUserMenu} anchorEl={anchorAvatarRef.current} transition disablePortal>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                >
                                    <Paper id="menu-list-grow">
                                        <ClickAwayListener onClickAway={handleCloseUserMenu}>
                                            <MenuList>
                                                {/* <MenuItem onClick={handleSignOut}>{t('action.signOut')}</MenuItem> */}
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </Grid>
                    <Grid>
                        <span></span>
                    </Grid>

                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Header