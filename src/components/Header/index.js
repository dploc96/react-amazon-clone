import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signout } from '../../actions/userActions';
import './Header.css';

function Header() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();

  const signoutHandler = () => {
    dispatch(signout());
  };

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('sidebar__open');
  };

  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('sidebar__open');
  };

  return (
    <>
      <header className="header">
        <div className="header__brand">
          <button onClick={openMenu}>&#9776;</button>
          <Link to="/">
            <img
              className="header__logo"
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt=""
            />
          </Link>
        </div>

        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
          <Link to={!userInfo && '/signin'}>
            <div onClick={signoutHandler} className="header__option">
              <span className="header__optionLineOne">
                Hello {!userInfo ? 'Guest' : userInfo.name}
              </span>
              <span className="header__optionLineTwo">
                {userInfo ? 'Sign Out' : 'Sign In'}
              </span>
            </div>
          </Link>

          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>

          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>

          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">0</span>
          </div>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar__closeButton" onClick={closeMenu}>
          x
        </button>
        <ul className="sidebar__categories">
          <li>Laptop</li>

          <li>Desktop</li>
        </ul>
      </aside>
    </>
  );
}

export default Header;
