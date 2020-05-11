import * as React from 'react'

const ToolboxApp = () => {

  return (
    <div className='toolbox-wrapper wt-offset-top-12 wt-offset-top-md-24 toolbox-wrapper' id='toolbox-app'>
      <section className='wt-section_bg_gray-dark toolbox-app'>
        <div className='wt-container toolbox-app__inner'>
          <div className='wt-row wt-row_size_l
                              wt-row_justify_around wt-row-lg_justify_start wt-row-sm_justify_center
                              wt-row_align-items_center wt-row-sm_align-items_start
                              wt-row-sm_direction_column'
          >
            <div className='wt-col wt-col-3 wt-col-lg-4 wt-col-md-5
                                  wt-offset-left-1 wt-offset-left-lg-2 wt-offset-left-md-1
                                  toolbox-app__image-wrapper'
            >
              <picture className='toolbox-app__image'>
                <source
                  type='image/webp'
                  srcSet='/app/static/images/page.webp 1x,
                        /app/static/images/page@2x.webp 2x'
                />
                <source
                  type='image/jpg'
                  srcSet='/app/static/images/page.jpg 1x,
                        /app/static/images/page@2x.jpg 2x'
                />
                <img
                  alt='Toolbox App panel'
                  src='/app/static/images/page.jpg'
                  srcSet='/app/static/images/page.jpg 1x,
                        /app/static/images/page@2x.jpg 2x'
                />
              </picture>
            </div>
            <div className='wt-col wt-col-8 wt-col-lg-5 wt-col-md-6 wt-col-sm-12 toolbox-app__info'>
              <h2 className='toolbox-app__title'>Maintain your tools with the Toolbox&nbsp;App</h2>
              <p className='toolbox-app__description'>Simple installations, updates, and more</p>
              <a href='#' className='toolbox-app__link'>Learn more</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


export default ToolboxApp
