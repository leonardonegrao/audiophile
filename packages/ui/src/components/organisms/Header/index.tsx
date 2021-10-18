import React from 'react';
import styled from 'styled-components';

import Logo from '../../atoms/Logo';
import CategoryContainer from '../../molecules/CategoryContainer';

import MobileMenu from './components/MobileMenu';
import CartMenu from './components/CartMenu';
import CartItemComponent from './components/CartItem';
import Nav from './components/Nav';

const StyledHeader = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors.black.light};
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    border-bottom: none;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 32px;
  padding-bottom: 32px;
  
  width: 100%;
  max-width: calc(100% - 48px);
  
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    justify-content: start;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    justify-content: space-between;
    max-width: 1110px;
  }
`;

interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  imageUrl?: string;
  features?: string;
  boxItems?: { name: string; quantity: number; }[];
  gallery?: { url: string; alt: string; }[];
  relatedProducts?: string[];
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}

interface Order {
  id: string;
  items: CartItem[];
  total: number;
  onChange: (itemId: string, quantity: number) => void;
}

export interface Category {
  id: string;
  title: string;
  slug: string;
  image: {
    id: string;
    url: string;
  }
}

interface HeaderProps {
  /**
   * Categories to be displayed in the header
   */
  categories: Category[];
  /**
   * Customer's order
   */
  order: Order;
}

export default function Header({ categories, order }: HeaderProps) {
  return (
    <StyledHeader role="region" aria-label="header">
      <HeaderContent>
        <MobileMenu>
          {categories.map((category) => (
            <CategoryContainer
              key={category.id}
              id={category.id}
              title={category.title}
              slug={category.slug}
              image={category.image}
            />
          ))}
        </MobileMenu>

        <Logo color="light" />

        <Nav categories={categories} />

        <CartMenu orderTotal={order.total} itemsQuantity={order.items.length}>
          {order.items.map((item) => (
            <CartItemComponent key={item.id} item={item} onChange={order.onChange} />
          ))}
        </CartMenu>
      </HeaderContent>
    </StyledHeader>
  );
}