import * as React from 'react';
import './index.scss';

type HeaderProps = {
    user : string
}

const Header = ({ user } : HeaderProps) => {
    return <>
        <div className='top-bar'>
            <img src="/assets/logo.png" alt="Error!" />
            <div className='user'>
                <div className='avatar'>
                    <p>{user[0]}</p>
                </div>
                <p className='name'>{user}</p>
            </div>
        </div>
    </>
}

export default Header;