import React from 'react';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const LinksRedirect=()=>{
    return(
        <div>
            <Button href="https://github.com/rahitiperodeau/"  color="inherit">
                <GitHubIcon/>
            </Button>
            <Button href="https://www.linkedin.com/in/rahiti-perodeau" color="inherit">
                <LinkedInIcon/>
            </Button>

        </div>
    )
}
export default LinksRedirect;


