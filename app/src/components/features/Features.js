import * as React from 'react'

const Feature = ({icon, alt, title, description}) => {
  return (
    <div className='wt-offset-top-48 wt-offset-top-sm-24 features__item features-item'>
      <img className='features-item__icon' src={`/app/static/images/features/${icon}`} alt={alt}/>
      <span className='features-item__title'>{title}</span>
      <p className='features-item__description'>{description}</p>
    </div>
  )
}

const Features = ({features}) => {

  return (
    <section className='wt-container wt-offset-top-24 features' id='overview'>
      <div className='wt-row wt-row_size_l wt-row-md_size_m wt-row-sm_direction_column'>
        <div className='wt-col wt-col-6 features__image-wrapper'>
          <picture className='features__image'>
            <source
              type='image/webp'
              srcSet='/app/static/images/features.webp 1x,
                      /app/static/images/features@2x.webp 2x'
            />
            <source
              type='image/png'
              srcSet='/app/static/images/features.png 1x,
                      /app/static/images/features@2x.png 2x'
            />
            <img
              alt='An abstract man near the schedule'
              src='/app/static/images/features.png'
              srcSet='/app/static/images/features.png 1x,
                      /app/static/images/features@2x.png 2x'
            />
          </picture>
        </div>
        <div className='wt-col wt-col-6 wt-col-sm-12 features__list'>
          {
            features.map((item, i) =>
              <Feature
                key={`feature-${i}`}
                icon={item.icon}
                title={item.title}
                description={item.description}
                alt={item.alt}
              />
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Features
