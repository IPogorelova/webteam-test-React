import * as React from 'react'

export const useMatchMedia = (match) => {
  const [ isMobile, setIsMobile ] = React.useState(!window.matchMedia(match).matches)
  React.useEffect(() => {
    const changeMode = () => {
      const isMobileMedia = !window.matchMedia(match).matches
      if (isMobile !== isMobileMedia) setIsMobile(isMobileMedia)
    }
    window.addEventListener('resize', changeMode)
    return () => window.removeEventListener('resize', changeMode)
  }, [ isMobile ])

  return isMobile
}
