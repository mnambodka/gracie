import React from "react"
import { Link as RouterLink } from 'react-router-dom'
import { Grow, Link } from "@material-ui/core"
import logo from './backgroundUKRLP.png';


export const URL: string = "/welcome"

export const PageLink = (props: any) => <Link component={RouterLink} to={URL} {...props} />

export interface WelcomePageProps {
    message: string
}


const WelcomePage = (props: WelcomePageProps) => {

    return <div>Hallo</div>
    
    // <img width="100%" src={logo} alt="Logo"/>


    //     <Grow
    //         in={true}
    //         style={{ transformOrigin: '0 0 0' }}
    //         {...({ timeout: 500 })}
    //     >
    //         <div>
    //             {props.message}
    // </div>
        // </Grow>

}

export default WelcomePage

