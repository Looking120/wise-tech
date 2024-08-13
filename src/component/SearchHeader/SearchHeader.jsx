import React from 'react';
import './SearchHeader.css'; // Assurez-vous que ce chemin est correct

const SearchHeader = () => {
    return (
        <section className="search-header">
            <div className="search-title">
                <h3>Gomel</h3>
            </div>
            <div className="search-container">
                <input type="text" placeholder="Search..." />
                <button type="submit">Search</button>
            </div>
        </section>
    );
};

export default SearchHeader;
