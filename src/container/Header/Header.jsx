import React from 'react'
import { SubHeading } from '../../components'
import { images } from '../../constants'
import useWindowSize from '../../hooks/useWindowSize'
import './HeaderStyled.js'
import { HeaderStyled } from './HeaderStyled.js'

const Header = () => {
  const { width } = useWindowSize()
  return (
    <HeaderStyled width={width} className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">The Key To Cloud Kitchen </h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>
          SabFeed is a food ordering company located in Chitwan. Our Service to Provide Healthily, Quality And Tasty Food For Individual And Company Employee In
          Decent Price Under 30 Minutes Of Food Order
        </p>
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header_img" />
      </div>
    </HeaderStyled>
  )
}

export default Header
