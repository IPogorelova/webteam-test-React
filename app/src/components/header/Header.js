import * as React from 'react'
import cn from 'classnames'
import {useMatchMedia} from '../../utils/hooks'

const Header = () => {
  const [activeLink, setActiveLink] = React.useState('Overview')
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleRef = React.useRef(null);
  const isMobile = useMatchMedia('screen and (min-width: 768px)')

  const useOutsideAlerter = (ref) => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target) && isMobile) {
        setIsMenuOpen(false)
      }
    }

    React.useEffect(() => {
      document.addEventListener('click', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('click', handleClickOutside);
      };
    }, [ref])
  }
  useOutsideAlerter(toggleRef)

  return (
    <header className='header'>
      <div className='wt-container header__inner'>
        <div className='wt-row wt-row_size_0 wt-row_align-items_center'>
          <div className='wt-col wt-col-auto-fill'>
            <a href='/' className='header__logo'>Toolbox</a>
            <button
              ref={toggleRef}
              className={cn('header__nav-button', {'header__nav-button_active' : isMenuOpen})}
              onClick={(e) => {
                if (window.innerWidth <= 550) {
                  setIsMenuOpen(!isMenuOpen)
                }
              }}
            >
              {activeLink}
            </button>
          </div>
          <nav className='wt-col wt-col-sm-12'>
            <ul className={cn('wt-row wt-row_size_0 wt-row_align-items_center wt-row-sm_justify_between header__nav', {'header__nav_opened' : isMenuOpen})}>
              <li className='header__link'>
                <a
                  href='#overview'
                  className='link'
                  onClick={(e) => setActiveLink('Overview')}
                >
                  Overview
                </a>
              </li>
              <li className='header__link'>
                <a
                  href='#toolbox-app'
                  className='link'
                  onClick={(e) => setActiveLink('Toolbox App')}
                >
                  Toolbox App
                </a>
              </li>
              <li className='header__link'>
                <a href='#' className='button button_border button_small'>Buy now</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={cn('overlay', {'overlay_shown' : isMenuOpen})}/>
    </header>
  )
}


export default Header
