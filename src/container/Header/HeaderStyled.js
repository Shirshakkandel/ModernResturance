import styled from 'styled-components/macro'

export const HeaderStyled = styled.div`
  background-color: var(--color-black);

  .app__header {
    &-h1 {
      font-family: var(--font-base);
      color: var(--color-golden);
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: capitalize;
      line-height: 117px;
      line-height: ${({ width }) => (width <= 540 ? '70px' : width < 2000 ? '117px' : '210px')};
      font-size: ${width => (width < 500 ? '50px' : width < 786 ? '70px' : width < 1024 ? '80px' : width < 2000 ? '90px' : '100px')};
    }

    &-img img {
      width: 80%;
    }
  }
`
