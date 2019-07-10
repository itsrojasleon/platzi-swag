import React from 'react';
import { graphql } from 'gatsby';

import { SEO, Jumbo } from '../components';
import styled from 'styled-components';

export const query = graphql`
  query GET_DESCRIPTION {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
  }
`;

const Button = styled.button`
  width: 4rem;
  background-color: #98ca3f;
  border: none;
  border-radius: 10px;
  color: ${props => props.color};
`;

const IndexPage = ({ data }) => (
  <>
    <SEO title='Home' />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description} />
    <Button color='white'>Buy</Button>
  </>
);

export default IndexPage;
