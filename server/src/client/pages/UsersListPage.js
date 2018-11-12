import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Helmet } from 'react-helmet';


class UsersList extends Component {
    componentDidMount(){
        this.props.fetchUsers();
        //this is necessary if user routes to other page, otherwise redundant 
    }

    renderUsers(){
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })
    }

    head() {
        return (
            <Helmet>
                <title>{`${this.props.users.length} Users Loaded`}</title>
                <meta property="og:title" content="Users App" />
            </Helmet>
        )
    }

    render(){
        return (
            <div>
                {this.head()}
                Heres a list of users: 
                <ul>{this.renderUsers()}</ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return { users: state.users };
}

function loadData(store){
    return store.dispatch(fetchUsers());
}

export default {
    loadData: loadData, //or just loadData would work but expanded for clarity, 
    component: connect(mapStateToProps, { fetchUsers })(UsersList)

};