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

export default Home;