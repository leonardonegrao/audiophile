import React from 'react';
import styled from 'styled-components';

import Text from '../../../../atoms/Text';
import Link from '../../../../atoms/Link';

import { Category } from '../../';

const StyledNav = styled.nav`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    display: block;

    ul {
      display: flex;

      li + li {
        margin-left: 34px;
      }

      li {
        color: ${({ theme }) => theme.colors.white.main};
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.primary.main};
        }
      }
    }
  }
`;

interface NavProps extends React.ComponentPropsWithoutRef<'nav'> {
  categories: Category[];
}

export default function Nav({ categories, ...rest }: NavProps) {
  return (
    <StyledNav role="navigation" {...rest}>
      <ul>
        <li>
          <Link to="/">
            <Text variant="subtitle">Home</Text>
          </Link>
        </li>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/category/${category.id}`}>
              <Text variant="subtitle">{category.title}</Text>
            </Link>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
}
