import React from 'react';

const Home = () => {
    console.log('home.js')
    return (
        <div>
            <div>I'm the greatest home component</div>
            <button onClick={() => console.log('hi there')}>press me</button>
        </div>
    );   
};

export default {
    component: Home 
};
//different cause Routes needs a loaddata and a component. Cleans up 