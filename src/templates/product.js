import React from 'react';
import { ProductDetails } from '../components';

export default function product({ pageContext }) {
  return <ProductDetails {...pageContext} />;
}
