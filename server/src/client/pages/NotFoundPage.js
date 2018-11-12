import React from 'react';

//static renames the context prop
const NotFoundPage = ({ staticContext = {} }) => {
    staticContext.notFound = true;
    return <h1>negative, ghost router. 404</h1>
}

export default {
    component: NotFoundPage
};