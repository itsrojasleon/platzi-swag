/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import './layout.css';
import { Content, Footer } from '../styles/components';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Content>
        <main>{children}</main>
        <Footer>
          Made with love By Platzi
          <a href='https://platzi.com'>Gatsby</a>
        </Footer>
      </Content>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
