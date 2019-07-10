import React from 'react';
import { StyledJumbo } from '../styles/components';

export default function jumbo({ description }) {
  return (
    <StyledJumbo>
      <div>
        <h2>Get the best exclusive and special swag from Platzi!</h2>
        <small>{description}</small>
      </div>
    </StyledJumbo>
  );
}
