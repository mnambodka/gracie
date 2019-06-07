import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth = 250

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        page: {
            width: '100%',
        },
        appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),

            backgroundColor: '#ffffff',
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            color: '#000000',
            marginLeft: 8,
            marginRight: 10,
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
            backgroundColor: 'black',
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: '0 4px',
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: -drawerWidth,
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        },
        navigationNested: {
            paddingLeft: theme.spacing(3)
        },
        navigationNested2: {
            paddingLeft: (theme.spacing(4))
        },
        navigationListItemIcon: {
            color: '#f5f5f5'
        },
        navigationListItemText: {
            color: '#f5f5f5'
        },
        progress: {
            margin: theme.spacing(2),
          },
        pageHeading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
        button: {
            
        },
        input: {

        }

    }))