import * as React from 'react'

const Hero = () => {

  return (
    <section className='wt-container wt-offset-top-96 wt-offset-top-sm-48 hero'>
      <div className='wt-row wt-row_size_l wt-row-md_size_m wt-row_justify_between wt-row-sm_justify_start'>
        <div className='wt-col wt-col-6 wt-col-sm-12 wt-offset-top-sm-48 wt-offset-top-12 hero__image-wrapper'>
          <picture className='hero__image'>
            <source
              type='image/webp'
              srcSet='/app/static/images/hero.webp 1x,
                      /app/static/images/hero@2x.webp 2x'
            />
            <source
              type='image/png'
              srcSet='/app/static/images/hero.png 1x,
                      /app/static/images/hero@2x.png 2x'
            />
            <img
              className='wt-offset-top-sm-24'
              alt='An abstract woman at the PC with icons of JetBrains products'
              src='/app/static/images/hero.png'
              srcSet='/app/static/images/hero.png 1x,
                      /app/static/images/hero@2x.png 2x'
            />
          </picture>
        </div>
        <div className='wt-col wt-col-6 wt-col-sm-12 wt-offset-top-sm-24'>
          <h1 className='title hero__title'>All Products Pack</h1>
          <p className='wt-offset-top-24 wt-offset-top-sm-12 subtitle hero__subtitle'>
            A complete full-stack developer toolkit
          </p>
          <a href='/' className="wt-offset-top-48 wt-offset-top-md-24 wt-offset-top-sm-12 button hero__button">
            I want it all
          </a>
          <p className="wt-offset-top-24 wt-offset-top-sm-12 text hero__text">
            An upgrade and switch option available
          </p>
        </div>
      </div>
    </section>
  )
}


export default Hero
