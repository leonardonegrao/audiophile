import React from 'react';
import styled from 'styled-components';

import Text from '../../atoms/Text';
import Button from '../../atoms/Button';
import Link from '../../atoms/Link';

const StyledCategoryContainer = styled.div`
  display: grid;
  height: 217px;
  width: 100%;
  grid-template-rows: 52px 52px 1fr;
  grid-template-columns: 1fr auto 1fr;

  .content {
    grid-column: 2;
    grid-row: 1 / -1;
    z-index: 1;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    padding-bottom: 22px;

    .image-container {
      position: relative;

      img {
        height: 104px;
      }

      .oval-shadow {
        position: absolute;
        left: 0;
        bottom: 11px;

        height: 14px;
        width: 100%;

        background: #000000;
        filter: blur(43px);
      }
    }

    h2 {
      margin-top: 32px;
      margin-bottom: 17px;
    }
  }
  
  .background {
    grid-column: 1 / -1;
    grid-row: 2 / -1;

    background: ${({ theme }) => theme.colors.white.darkest};

    border-radius: 8px;
  }
`;

interface CategoryContainerProps extends React.ComponentPropsWithoutRef<'div'> {
  id: string;
  title: string;
  slug: string;
  image: { id: string; url: string };
}

export default function CategoryContainer({
  id,
  title,
  slug,
  image,
  ...rest
}: CategoryContainerProps) {
  return (
    <StyledCategoryContainer {...rest}>
      <div className="content">
        <div className="image-container">
          <img
            src={image.url}
            alt={title}
          />
          <div className="oval-shadow" />
        </div>

        <Text
          as="h2"
          variant="overline"
          fontSize={15}
          fontWeight="bold"
          letterSpacing={1.07}
        >
          {title}
        </Text>

        <Link to={`/category/${id}`}>
          <Button variant="tertiary">Shop</Button>
        </Link>
      </div>
      <div className="background" />
    </StyledCategoryContainer>
  );
}
