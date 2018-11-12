import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
    console.log('my auth status is', auth);
    
    const authButton = auth ? (
        <a href="/api/logout">Logout</a>
        //needs to include api so that it is proxied through render server
    ): (
        <a href="/api/auth/google">Login</a>
        //a tag changes browser whereas link will navigate within react app
    );

    return (
        <div>
            <Link to="/">React SSR</Link>
            <div>
                <Link to="/users">Users</Link>
                <Link to="/admins">Admins</Link>
                {authButton}
            </div>
        </div>
    )
}

function mapStateToProps({ auth }){
    return { auth };
}

export default connect(mapStateToProps)(Header)