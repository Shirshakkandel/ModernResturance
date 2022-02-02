# `1)All global Css in index.css and App.css inside src folder `


# `2)Building a Navbar for mobile `

![Mobile Navbar](screenshot/mobileNavbar.png)

```js
//src\components\Navbar\Navbar.jsx

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false)
  const { width } = useWindowSize()

  return (
    <NavbarFlexXbetweenYcenter className="app__navbar" width={width}>
//     ..............
//     ...........
     {/* For small screen one toggle menu */}
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} style={{ cursor: 'pointer' }} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              ........
              ....
            </ul>
          </div>
        )}
      </div>
    <NavbarFlexXbetweenYcenter>
    )}

//src\components\Navbar\Navbarstyles.js
  import  styled form 'styled-components'
  export const NavbarFlexXbetweenYcenter = styled.nav` 
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

```


```css
/* src\index.css */
.slide-bottom {
  -webkit-animation: slide-bottom 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes slide-bottom {
  0% {
    -webkit-transform: translateY(-25%);
    transform: translateY(-25%);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes slide-bottom {
  0% {
    -webkit-transform: translateY(-25%);
    transform: translateY(-25%);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

```



# 3)`Video display`

![video](screenshot/video.png)
```js
//src\container\Intro\Intro.jsx
const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false)
  const videoRef = React.useRef()
  return (
    <div className="app__video">
      <video src={meal} ref={videoRef} type="video/mp4" loop controls={false} muted />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={() => {
            setPlayVideo(!playVideo)
            if (playVideo) {
              videoRef.current.pause()
            } else {
              videoRef.current.play()
            }
          }}
        >
          {playVideo ? <BsPauseFill color="#fff" fontSize={30} /> : <BsFillPlayFill color="#fff" fontSize={30} />}
        </div>
      </div>
    </div>
  )
}

```

```css
.app__video {
  height: 100vh;
  position: relative;
}

.app__video video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.app__video-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
}

.app__video-overlay_circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid var(--color-golden);
  cursor: pointer;
}

```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

