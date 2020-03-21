import React from 'react';
import { Menu, Button } from 'semantic-ui-react'
import Core from "../providers/core";

const Header = (props) => {

    return (
        <header className="App-header">

            <Menu secondary stackable>
                <Menu.Item>
                    <div className="logo">
                        LockScreenMe
                    </div>
                </Menu.Item>
                <Menu.Menu position='right'>
                <Menu.Item>
                    <span>Share : </span> 
                    <Button as="a" href={`whatsapp://send?text=${Core.AppUrl}`} data-action="share/whatsapp/share" circular icon='whatsapp' inverted />
                    <Button as="a" href={`https://www.facebook.com/sharer/sharer.php?u=${Core.AppUrl}`} target="_blank" circular icon='facebook' inverted />
                </Menu.Item>

                </Menu.Menu>
            </Menu>

            <div className="description">
                <h3>Add your personal informations on your lock screen picture</h3>
            </div>


        </header>
    );
};

export default Header;