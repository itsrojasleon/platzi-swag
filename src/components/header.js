import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { MenuItem, StyledHeader } from '../styles/components';
import { CartContext } from '../contexts/CartContext';

const Header = () => {
  const { cart } = useContext(CartContext);
  return (
    <StyledHeader>
      <Link to='/'>
        <img src='https://i.postimg.cc/6q3pg48v/Logo.png' alt='platziLogo' />
      </Link>
      <nav>
        <ul>
          <MenuItem margin>
            <Link to='/'>Products</Link>
          </MenuItem>
          <MenuItem margin>
            <a href='https://platzi.com'>Platzi</a>
          </MenuItem>
          <MenuItem>
            <Link to='/'>
              <span>
                <img src='https://i.postimg.cc/L6wpMxLt/cart.png' alt='cart' />
                {cart.length}
              </span>
            </Link>
          </MenuItem>
        </ul>
      </nav>
    </StyledHeader>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
