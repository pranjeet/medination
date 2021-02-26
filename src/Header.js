import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
    const [{ basket, user }] = useStateValue();

    const login = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <nav className="header">
            {/*Logon on the left->image*/}
            <div>
                <Link to="/">
                    <img className="header__logo"
                        //src={process.env.PUBLIC_URL + '/Medination.png'}
                        src="https://ci4.googleusercontent.com/proxy/Yd2KsTl_n2bRuwKvPMV2FCbhrwVqGYVlPB1Bzf3ARMEBQOoKojVfqTMGpKkCEDI6_ZwQDGM2KwwYdCWFu08jQ_1RnwR88bLIW7prvHD745tKpAYiVO5dKrKR_O1xW08CRxcat2aeWTXomfffZkH31YQUgSnXK-vs=s0-d-e1-ft#https://www.freelogodesign.org/file/app/client/thumb/2186a4a6-b3e1-46b6-8e68-f4175dc6adaf_200x200.png"
                        alt="" />
                </Link>
            </div>
            {/*Search Box*/}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            {/*3 Links*/}
            <div className="header__nav">
                {/*1st Link*/}
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello {!user ? "Guest" : user?.email}</span>
                        <span class="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'} </span>
                    </div>
                </Link>

                {/*2nd Link*/}
                <Link to="/orders" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                {/*3rd Link*/}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        {/*Shopping basket icon*/}
                        <ShoppingCartIcon />
                        {/*Number of items in the basket*/}
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
                
            </div>
        </nav>
    );
}

export default Header;
