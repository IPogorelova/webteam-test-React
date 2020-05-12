import * as React from 'react'
import cn from 'classnames'
import {useMatchMedia} from '../../utils/hooks'

const ProductIcon = ({index, id, name, icon, tags, rowAmount, activeItem, setActiveItem, isMobile}) => {
  if (rowAmount === 3 && index % 3 === 0) {
    return (
      <div
        className={cn('wt-col wt-col-6 wt-col-md-4 wt-col-sm-6 wt-offset-top-48 wt-offset-top-sm-24 products__icon',
                  {'products__icon_disabled' : (activeItem !== id && activeItem !== null)})}
        onMouseEnter={() => !isMobile && setActiveItem(id)}
      >
        <img src={`/app/static/images/products/${icon}`} alt={name}/>
        <div className="products__item products-item">
          <a href="#" className="products-item__name">{name}</a>
          <div className='products-item__tags'>
            {tags.map((tag, i) => <span key={`tag-${i}`} className='products-item__tag tag'>{tag}</span>)}
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div
        className={cn('wt-col wt-col-3 wt-col-md-4 wt-col-sm-6 wt-offset-top-48 wt-offset-top-sm-24 products__icon',
                  {'products__icon_disabled' : (activeItem !== id && activeItem !== null)})}
        onMouseEnter={() => !isMobile && setActiveItem(id)}
      >
        <img src={`/app/static/images/products/${icon}`} alt={name}/>
        <div className="products__item products-item">
          <a href="#" className="products-item__name">{name}</a>
          <div className='products-item__tags'>
            {tags.map((tag, i) => <span key={`tag-${i}`} className='products-item__tag tag'>{tag}</span>)}
          </div>
        </div>
      </div>
    )
  }
}

const ProductInfo = ({id, name, tags, activeItem, setActiveItem}) => {
  return (
    <div
      className={cn('wt-col wt-col-6 products__item products-item', {'products-item_active' : activeItem === id})}
      onMouseEnter={() => setActiveItem(id)}
    >
      <a href='#' className='products-item__name'>{name}</a>
      <div className='products-item__tags'>
        {tags.map((tag, i) => <span key={`tag-${i}`} className='products-item__tag tag'>{tag}</span>)}
      </div>
    </div>
  )
}


const Products = ({data, rowAmount, titleMb}) => {
  let {title, description, items} = data
  let [activeItem, setActiveItem] = React.useState(null)

  const isMobile = useMatchMedia('screen and (min-width: 768px)')

  return (
    <section className='wt-container wt-offset-top-96 wt-offset-top-sm-48 products'>
      <div className='wt-row wt-row_size_l wt-row-md_size_m
                      wt-row_justify_between wt-row-sm_justify_start
                      wt-row-sm_direction_column-reverse
                      wt-row_align-items_end wt-row-sm_align-items_start'>
        <div className='wt-col wt-col-6 wt-col-sm-12'>
          <h2 className='section-title products__title'>{title}</h2>
        </div>
        <div className='wt-col wt-col-6 wt-col-sm-12'>
          {description && <p className='text products__description products__description_outer'>{description}</p>}
        </div>
      </div>
      <div className='wt-row wt-row_size_l wt-row-md_size_m
                      wt-row_justify_between wt-row-sm_justify_start
                      wt-offset-top-24 wt-offset-top-sm-0'>
        <div className='wt-col wt-col-6 wt-col-sm-12'>
          <div
            className='wt-row wt-row_size_0 wt-row-sm_size_m products__icons'
            onMouseLeave={() => setActiveItem(null)}
          >
            {
              items.map((item, i) =>
                <ProductIcon
                  key={`icon-${i}`}
                  index={i+1}
                  id={item.id}
                  name={item.name}
                  icon={item.icon}
                  tags={item.tags}
                  rowAmount={rowAmount}
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                  isMobile={isMobile}
                />
              )
            }
          </div>
        </div>
        <div className='wt-col wt-col-6 products__info-wrapper'>
            {description && <p className='text products__description products__description_inner'>{description}</p>}
          <div
            className='wt-row wt-row_size_0 wt-offset-top-24 products__info'
            onMouseEnter={() => setActiveItem('')}
            onMouseLeave={() => setActiveItem(null)}
          >
            {
              items.map((item, i) =>
                <ProductInfo
                  key={`product-${i}`}
                  id={item.id}
                  name={item.name}
                  tags={item.tags}
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                />
              )
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
