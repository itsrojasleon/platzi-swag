import React from 'react';
import { Link } from 'gatsby';
import { SEO } from '../components';
import { Button, Purchase } from '../styles/components';

export default function thanks() {
  return (
    <div>
      <SEO title='Successful purchase' />
      <Purchase>
        <h2>Successful purchase</h2>
        <p>I hope you enjoy with your swag</p>
        <p>Never stop learning</p>
        <span rol='img' aria-label='emoji'>
          ❤️
        </span>
        <Link>
          <Button>Back to the catalogue</Button>
        </Link>
      </Purchase>
    </div>
  );
}
