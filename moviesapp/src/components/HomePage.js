import React from 'react';
import MovieList from './MovieList';
import Pagination from './Pagination';
import './HomePage.css';
import Filter from "./Filter";

const HomePage = () => {
    return (
        <div id="home">
            <div className="title">MovieTube</div>
                <MovieList />
            <div className="footer">
                <Pagination />
                <Filter/>
            </div>
        </div>
    ) };

export default HomePage;