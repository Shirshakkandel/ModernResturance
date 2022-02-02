import styled from 'styled-components/macro'

export const NavbarFlexXbetweenYcenter = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-black);
  padding: 1rem 2rem;
  padding: ${({ width }) => (width < 786 ? '1rem' : '1rem 2rem')};

  //========== 1).app__navbar====================
  .app__navbar {
    //a)Logo section .app_navbar-logo
    &-logo {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      img {
        width: ${({ width }) => (width < 576 ? '110px' : width <= 2000 ? '150px' : '210px')};
      }
    }
    // )navbar link section .app_navbar-links
    &-links {
      flex: 1;
      display: flex;
      display: ${({ width }) => (width < 1024 ? 'none' : 'flex')};
      justify-content: center;
      align-items: center;
      list-style: none;

      li {
        margin: 0 1rem;
        cursor: pointer;
        :hover {
          color: var(--color-grey);
        }
      }
    }
  }
  //========== End of  1).app__navbar====================

  //========== 2).app__navbar-login====================
  .app__navbar-login {
    display: ${({ width }) => (width < 768 ? 'none' : 'flex')};
    justify-content: flex-end;
    align-items: center;

    a {
      margin: 0 1rem;
      text-decoration: none;
      transition: 0.5s ease;
      :hover {
        border-bottom: 1px solid var(--color-golden);
      }
    }

    div {
      width: 1px;
      height: 30px;
      background: var(--color-grey);
    }
  }
  //========== End of 2).app__navbar-login====================

  //========== 3).app__navbar-smallscreen====================
  .app__navbar-smallscreen {
    display: ${({ width }) => (width <= 1024 ? 'flex' : 'none')};
    //if toggleMenu  is click then following will be displayed
    &_overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: var(--color-black);
      transition: 0.5s ease;
      flex-direction: column;
      z-index: 5;

      .overlay__close {
        font-size: 27px;
        color: var(--color-golden);
        cursor: pointer;
        position: absolute;
        top: 20px;
        right: 20px;
      }
    }

    &_links {
      list-style: none;

      li {
        margin: 2rem;
        cursor: pointer;
        color: var(--color-golden);
        font-size: 2rem;
        text-align: center;
        font-family: var(--font-base);
      }
      &:hover {
        color: var(--color-white);
      }
    }
  }
  //========== 3).app__navbar-smallscreen====================
`
