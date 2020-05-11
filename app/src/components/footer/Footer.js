import * as React from 'react'

const Footer = () => {

  return (
    <footer className='wt-section_bg_dark footer'>
      <div className='wt-container'>
        <div className='wt-row wt-row_size_l wt-row-md_size_s wt-row-sm_direction_column'>
          <img
            className='wt-col footer__logo footer__logo_full'
            src='/app/static/images/jb.svg'
            alt='JetBrains logo'
          />
          <img
            className='wt-col footer__logo footer__logo_mob'
            src='/app/static/images/jb-sm.svg'
            alt='JetBrains logo'
          />
          <div className='wt-col wt-col-2 wt-col-md-3 wt-col-sm-12 wt-offset-top-12 wt-offset-top-sm-24'>
            <span className='footer__subtitle footer__text'>About JetBrains</span>
            <ul className='footer__nav'>
              <li>
                <a href='#' className='footer__link footer__text'>Company</a>
              </li>
              <li>
                <a href='#' className='footer__link footer__text'>Contacts</a>
              </li>
              <li>
                <a href='#' className='footer__link footer__text'>Press & Logos</a>
              </li>
              <li>
                <a href='#' className='footer__link footer__text'>Careers</a>
              </li>
            </ul>
          </div>
          <div className='wt-col wt-col-auto-fill wt-col-sm-12 wt-offset-top-12 wt-offset-top-sm-24'>
            <span className='footer__subtitle footer__text'>Follow JetBrains</span>
            <ul className='footer__socials'>
              <li className='footer__icon'>
                <a href='https://www.facebook.com/JetBrains' title='JetBrains on Facebook'>
                  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='22' height='22' viewBox='0 0 22 22'>
                    <defs>
                      <path id='fb-a' d='M10.584 0H0v21.168h21.168V0z'/>
                    </defs>
                    <g fill='none' fillRule='evenodd' opacity='.7'>
                      <mask id='fb-b' fill='#fff'>
                        <use xlinkHref='#fb-a'/>
                      </mask>
                      <path fill='#FFF' d='M20 0H1.168C.524 0-.001.522-.001 1.169v18.83c0 .647.523 1.17 1.17 1.17h10.137V12.97H8.548V9.776h2.758V7.42c0-2.734 1.671-4.223 4.109-4.223 1.169 0 2.172.087 2.465.126v2.858h-1.69c-1.328 0-1.585.63-1.585 1.555v2.04h3.164l-.413 3.194h-2.75v8.198h5.393c.646 0 1.169-.522 1.169-1.169V1.17C21.168.522 20.645 0 19.999 0' mask='url(#fb-b)'/>
                    </g>
                  </svg>
                </a>
              </li>
              <li className='footer__icon'>
                <a href='https://twitter.com/jetbrains' title='JetBrains on Twitter'>
                  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='22' height='20' viewBox='0 0 22 20'>
                    <defs>
                      <path id='twi-a' d='M11 0H0v20h22V0z'/>
                    </defs>
                    <g fill='none' fillRule='evenodd' opacity='.7'>
                      <mask id='twi-b' fill='#fff'>
                        <use xlinkHref='#twi-a'/>
                      </mask>
                      <path fill='#FFF' d='M22.957 2.374a9.125 9.125 0 0 1-2.7.805c.975-.604 1.726-1.609 2.063-2.776-.901.564-1.914 1.005-3.002 1.207C18.454.643 17.255 0 15.867 0c-2.587 0-4.725 2.253-4.725 5.07 0 .403.036.765.111 1.168-3.862-.242-7.315-2.254-9.64-5.313A5.269 5.269 0 0 0 .977 3.46c0 1.771.824 3.302 2.1 4.225-.788-.04-1.5-.24-2.139-.643v.081c0 2.454 1.612 4.467 3.788 4.95-.412.12-.824.16-1.238.16-.298 0-.6-.04-.9-.08.602 2.012 2.325 3.461 4.389 3.501-1.612 1.368-3.639 2.172-5.852 2.172-.374 0-.75-.04-1.125-.08A12.54 12.54 0 0 0 7.202 20c8.665 0 13.428-7.687 13.428-14.366V4.99a10.66 10.66 0 0 0 2.327-2.615' mask='url(#twi-b)'/>
                    </g>
                  </svg>
                </a>
              </li>
              <li className='footer__icon'>
                <a href='https://www.linkedin.com/company/jetbrains' title='JetBrains on LinkedIn'>
                  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='22' height='22' viewBox='0 0 22 22'>
                    <defs>
                      <path id='lin-a' d='M0 0h21.842v21.842H0z'/>
                    </defs>
                    <g fill='none' fillRule='evenodd' opacity='.7'>
                      <mask id='lin-b' fill='#fff'>
                        <use xlinkHref='#lin-a'/>
                      </mask>
                      <path fill='#FFF' d='M19.342 21.842H2.5a2.5 2.5 0 0 1-2.5-2.5V2.5A2.5 2.5 0 0 1 2.5 0h16.842a2.5 2.5 0 0 1 2.5 2.5v16.843a2.5 2.5 0 0 1-2.5 2.5zM2.93 19.102h3.556v-10.7H2.93v10.7zm1.778-12.16c1.24 0 2.012-.823 2.012-1.85-.023-1.048-.773-1.848-1.99-1.848-1.215 0-2.01.8-2.01 1.848 0 1.027.771 1.85 1.965 1.85h.023zm14.602 12.16v-6.134c0-3.288-1.754-4.817-4.094-4.817-1.888 0-2.734 1.039-3.205 1.767V8.402H8.454c.048 1.004 0 10.7 0 10.7h3.557v-5.976c0-.319.023-.638.117-.866.257-.64.842-1.301 1.824-1.301 1.288 0 1.802.982 1.802 2.42v5.724h3.556z' mask='url(#lin-b)'/>
                    </g>
                  </svg>
                </a>
              </li>
              <li className='footer__icon'>
                <a href='https://www.youtube.com/user/JetBrainsTV' title='JetBrains on YouTube'>
                  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='24' height='17' viewBox='0 0 24 17'>
                    <defs>
                      <path id='yt-a' d='M0 0h24v16.91H0z'/>
                    </defs>
                    <g fill='none' fillRule='evenodd' opacity='.7'>
                      <mask id='yt-b' fill='#fff'>
                        <use xlinkHref='#yt-a'/>
                      </mask>
                      <path fill='#FFF' d='M9.545 12.023V4.886l6.273 3.569-6.273 3.568zM23.498 2.64A3.015 3.015 0 0 0 21.377.505C19.505 0 12 0 12 0S4.495 0 2.623.505A3.015 3.015 0 0 0 .502 2.64C0 4.524 0 8.455 0 8.455s0 3.93.502 5.814a3.016 3.016 0 0 0 2.121 2.135c1.872.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.016 3.016 0 0 0 2.121-2.135C24 12.385 24 8.455 24 8.455s0-3.93-.502-5.815z' mask='url(#yt-b)'/>
                    </g>
                  </svg>
                </a>
              </li>
              <li className='footer__icon'>
                <a href='https://blog.jetbrains.com/' title='JetBrains blog'>
                  <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'>
                    <g fill='none' fillRule='evenodd' opacity='.7' transform='translate(3 3)'>
                      <g fill='#FFF' >
                        <path fill='#FFF' id='a' d='M2.739 5a6.982 6.982 0 0 1 6.3 4 6.982 6.982 0 0 1 6.3-4H18l.033 9.967h-2.994a6.582 6.582 0 0 0-6 4.033 6.983 6.983 0 0 0-6.3-4H0V5zm6.303-5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z'/>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='wt-row wt-row_size_m wt-row-md_wrap wt-offset-top-48 wt-offset-top-sm-24'>
          <div className='wt-col footer__copyright'>
            <div className='wt-row wt-row_size_m wt-row-md_wrap'>
              <span className='wt-col wt-offset-top-md-12 footer__text'>&copy; 2000 - 2017 JetBrains s.r.o. All rights reserved.</span>
              <span className='wt-col wt-offset-top-md-12 footer__text'>Developed with drive and IntelliJ IDEA</span>
            </div>
          </div>
          <div className='wt-col wt-offset-top-md-12 footer__privacy'>
            <div className='wt-row wt-row_size_0'>
              <a href='#' className='footer__text'>Privacy & Security</a>
              <a href='#' className='footer__text'>Terms of Use</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
