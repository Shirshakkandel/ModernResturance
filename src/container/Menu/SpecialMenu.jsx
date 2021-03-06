import React from 'react'

import { SubHeading, MenuItem } from '../../components'
import { Fade, Slide } from 'react-awesome-reveal'
import { data, images } from '../../constants'
import './SpecialMenu.css'

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Menu&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <Fade cascade damping={0.4} fraction={0.1}>
        <Slide direction="left">
          <div className="app__specialMenu-menu_wine  flex__center">
            <p className="app__specialMenu-menu_heading">For Individual</p>

            <div className="app__specialMenu_menu_items">
              {data.individual.map((wine, index) => (
                <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
              ))}
            </div>
          </div>
        </Slide>

        <Slide direction="down">
          <div className="app__specialMenu-menu_img">
            <img src={images.menu} alt="menu__img" />
          </div>
        </Slide>

        <Slide direction="top">
          <div className="app__specialMenu-menu_cocktails  flex__center">
            <p className="app__specialMenu-menu_heading">Business(more than 5)</p>
            <div className="app__specialMenu_menu_items">
              {data.business.map((cocktail, index) => (
                <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
              ))}
            </div>
          </div>
        </Slide>
      </Fade>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
)

export default SpecialMenu
