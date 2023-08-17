import React from 'react';
import "../newnav/newnav.css";

const Newnav = () => {
    return (
        <div className="new_nav">
            <div className="nav_data">
                <div className="left_data">
                    <button className="nav_button"><i className="fas fa-bars"></i> All</button>
                    <button className="nav_button">Sell</button>
                    <button className="nav_button">Best Sellers</button>
                    <button className="nav_button">Today's Deals</button>
                    <button className="nav_button">Mobiles</button>
                    <button className="nav_button">New Releases</button>
                    <button className="nav_button">Customer Service</button>
                    <button className="nav_button">Prime</button>
                    <button className="nav_button">Electronics</button>
                </div>
                <div className="right_data">
                    <button className="nav_button">New Launches from Mobiles, Electronics & more | Shop now</button>
                </div>
            </div>
        </div>
    )
}

export default Newnav;
