import React, { useState } from 'react';
import priceFormat from '../../utils/priceFormat';
import {
  Tag,
  SizeButton,
  // QtyButton,
  SizeSelect,
  Button,
  StyledProductDetail,
  QtySelect,
} from '../../styles/components';
import { SEO, Stars } from '../../components';

export default function productDetails({
  price,
  sku: id,
  product: { name, metadata },
}) {
  const [size, setSize] = useState(2);
  const [qty, setQty] = useState(1);
  const newPrice = priceFormat(price);
  return (
    <StyledProductDetail>
      <SEO title={name} />
      <img src={metadata.img} alt={name} />
      <div>
        <Tag>Pupular</Tag>
        <h2>{name}</h2>
        <b>USD {newPrice}</b>
        <Stars />
        {metadata.wear && <h3>Color: blue</h3>}
        <small>{metadata.description}</small>
        {metadata.wear && (
          <SizeSelect selecetd={size}>
            <SizeButton onClick={() => setSize(1)}>XS</SizeButton>
            <SizeButton onClick={() => setSize(2)}>S</SizeButton>
            <SizeButton onClick={() => setSize(3)}>M</SizeButton>
            <SizeButton onClick={() => setSize(4)}>L</SizeButton>
          </SizeSelect>
        )}
        <p>Quantity:</p>
        <QtySelect>
          <button onClick={() => (qty > 1 ? setQty(qty - 1) : null)}>-</button>
          <input type='text' disabled value={qty} />
          <button onClick={() => setQty(qty + 1)}>+</button>
        </QtySelect>
        <Button>Add to cart</Button>
      </div>
    </StyledProductDetail>
  );
}
