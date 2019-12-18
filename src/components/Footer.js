import React from 'react';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';
import { Menu } from 'semantic-ui-react'


class Footer extends React.Component{

    render(){
        return (
            <Menu inverted className={'top'}>
                <Menu.Item name='editorials'>Like<Facebook /></Menu.Item>
                <Menu.Item name='editorials'>Tweet<Twitter /></Menu.Item>
                <Menu.Item name='editorials'>Share<Instagram /></Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <p>All right reserved © ® 2019 - Serendipia.House, LLC.</p>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}

export default Footer;
