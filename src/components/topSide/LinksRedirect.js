import React, { Component }  from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const LinksRedirect=()=>{
    const preventDefault = event => event.preventDefault();
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


