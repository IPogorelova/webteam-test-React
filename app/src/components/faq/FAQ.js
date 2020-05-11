import * as React from 'react'

const FAQ = () => {
  return (
    <section className='wt-container wt-offset-top-96 wt-offset-top-sm-48 faq' id='faq'>
      <h2 className='section-title'>FAQ</h2>
      <div className='wt-row wt-row_size_l wt-row-md_size_m wt-offset-top-24 wt-offset-top-sm-12 wt-row-sm_direction_column'>
        <div className='wt-col wt-col-6 wt-col-sm-12'>
          <div className='faq__item'>
            <p className='faq__question'>
              Can I upgrade my existing IntelliJ IDEA, PyCharm, WebStorm or ReSharper Ultimate
              or any other JetBrains IDE license to the All Products Pack?
            </p>
            <p className='faq__answer'>
              Yes, your existing licenses to any JetBrains desktop products make you eligible to purchase
              new All Products Pack subscriptions with an additional discount.
            </p>
          </div>
        </div>
        <div className='wt-col wt-col-6 wt-col-sm-12 wt-offset-top-sm-24'>
          <div className='faq__item'>
            <p className='faq__question'>How to upgrade to All Products Pack?</p>
            <p className='faq__answer'>
              Yes, your existing licenses to any JetBrains desktop products make you eligible to purchase
              new All Products Pack subscriptions with an additional discount. Yes, your existing licenses
              to any JetBrains desktop products make you eligible to purchase new All Products Pack subscriptions
              with an additional <a href="#">discount</a>.
            </p>
          </div>
        </div>
      </div>
      <div className='wt-row wt-row_size_l wt-row-md_size_m wt-offset-top-96 wt-offset-top-sm-48'>
        <div className='wt-col wt-col-6 faq__image-wrapper'>
          <picture className='faq__image'>
            <source
              type='image/webp'
              srcSet='/app/static/images/faq.webp 1x,
                      /app/static/images/faq@2x.webp 2x'
            />
            <source
              type='image/png'
              srcSet='/app/static/images/faq.png 1x,
                      /app/static/images/faq@2x.png 2x'
            />
            <img
              alt='An abstract man greetings somebody'
              src='/app/static/images/faq.png'
              srcSet='/app/static/images/faq.png 1x,
                      /app/static/images/faq@2x.png 2x'
            />
          </picture>
        </div>
        <div className='wt-col wt-col-6 wt-col-sm-12'>
          <div className='faq__offer'>
            <p className='section-title'>
              Enhance your productivity and speed up coding with JetBrains tools!
            </p>
            <a className='faq__download-link' href='#'>
              <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='16' height='14' viewBox='0 0 16 14'>
                <defs>
                  <path id='download' d='M16.973 0h-16l8 9 8-9zM1 14h15.973L17 12H1v2z'/>
                </defs>
                <g fill='none' fillRule='evenodd' transform='translate(-1)'>
                  <mask id='d' fill='#fff'>
                    <use xlinkHref='#download'/>
                  </mask>
                  <g fill='#F76707' mask='url(#d)'>
                    <path d='M-3-4h24v24H-3z'/>
                  </g>
                </g>
              </svg>
              Download the All Products Pack infographics
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
