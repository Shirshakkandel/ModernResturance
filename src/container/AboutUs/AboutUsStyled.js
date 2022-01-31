import styled from 'styled-components'

export const AboutUsStyled = styled.div`
  position: relative;

  .app__aboutus-overlay {
    position: absolute;
    inset: 0;

    img {
      width: 391px;
      height: 415px;
      z-index: 0;
    }
  }

  .app__aboutus-content {
    width: 100%;
    z-index: 2;

    &_about {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      flex-direction: column;
      text-align: right;
    }

    &_knife {
      margin: 2rem 4rem;
      img {
        height: 910px;
      }
    }

    &_history {
      flex: 1;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;

      text-align: left;
    }
  }

  .app__aboutus-content_about p,
  .app__aboutus-content_history p {
    margin: 2rem 0;
    color: var(--color-grey);
  }

  @media screen and (min-width: 2000px) {
    .app__aboutus-content_knife img {
      height: 1110px;
    }

    .app__aboutus-content_about p,
    .app__aboutus-content_history p {
      margin: 4rem 0;
    }
  }

  @media screen and (max-width: 900px) {
    .app__aboutus-content {
      flex-direction: column;
    }

    .app__aboutus-content_knife {
      margin: 4rem 0;
    }
  }

  @media screen and (max-width: 650px) {
    .app__aboutus-overlay img {
      width: 80%;
      height: 320px;
    }
  }
`
