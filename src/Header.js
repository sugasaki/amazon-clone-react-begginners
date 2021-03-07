import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <nav className="header">
            {/* logo on the left -> img */}
            <Link to="/">
                <img
                    className='header__logo' 
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                    alt=""
                    >
                </img>
            </Link>
        {/* Search box */}
        <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon" />
        </div>

        {/* 3 Links */}
        <div className="header__nav">
            {/* 1st link */}
            <Link to="/login" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello Qazi</span>
                    <span className="header__optionLineTwo">Sign Int</span>
                </div>
            </Link>
            {/* 2nd link */}
            <Link to="/login" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Order</span>
                </div>
            </Link>

            {/* 3rd link */}
            <Link to="/login" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
            </Link>

            {/* 4th link */}
            <Link to="checkout" className="header__link">
                <div className="header_optionBasket">
                    {/* shopping basket icon */}
                    <ShoppingBasketIcon />
                    {/* Number of items in the basket */}
                    <span className="header__optionLineTwo header__basketCount">0</span>
                </div>
            </Link>

            {/* Basket icon with */}

        </div>

        </nav>
    )
}

export default Header
