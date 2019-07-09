import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { MenuItem, StyledHeader } from '../styles/components';

const Header = ({ siteTitle }) => (
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
            </span>
          </Link>
        </MenuItem>
      </ul>
    </nav>
    <div>
      <h1>
        <Link
          to='/'
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
