import React from "react"
import { Link as RouterLink } from 'react-router-dom'
import { Grow, Link } from "@material-ui/core"

export const URL: string = "/welcome"

export const PageLink = (props: any) => <Link component={RouterLink} to={URL} {...props} />


const WelcomePage = () => {
    return (
        <Grow
            in={true}
            style={{ transformOrigin: '0 0 0' }}
            {...({ timeout: 500 })}
        >
            <div>
                Welcome
    </div>
        </Grow>
    )
}

export default WelcomePage

