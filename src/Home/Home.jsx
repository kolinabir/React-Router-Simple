import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import './Home.css'
const Home = () => {
    const navigation = useNavigation();

    return (

        <div>
            <Header></Header>
            <h1>This is home!</h1>
            <div>{navigation.state==='loading' &&  <div class="loader"></div> }</div>
            <Outlet />
        </div>
    );
};

export default Home;