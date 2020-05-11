import * as React from 'react'
import cn from 'classnames'
import {useMatchMedia} from '../../utils/hooks'

const ProductIcon = ({id, name, icon, rowAmount, activeItem, setActiveItem}) => {
  return (
    <div
      className={cn('products__icon',
                   {'products__icon_items-3' : rowAmount === 3},
                   {'products__icon_disabled' : (activeItem !== id && activeItem !== null)})}
      onMouseEnter={() => setActiveItem(id)}
    >
      <img src={`/images/products/${icon}`} alt={name}/>
    </div>
  )
}

const ProductInfo = ({id, name, tags, activeItem, setActiveItem}) => {
  return (
    <div
      className={cn('products__item products-item', {'products-item_active' : activeItem === id})}
      onMouseEnter={() => setActiveItem(id)}
    >
      <a href='#' className='products-item__name'>{name}</a>
      <div className='products-item__tags'>
        {tags.map((tag, i) => <span key={`tag-${i}`} className='products-item__tag tag'>{tag}</span>)}
      </div>
    </div>
  )
}

const ProductInfoMobile = ({icon, name, tags}) => {
  return (
    <div className='products__item products-item'>
      <img src={`/images/products/${icon}`} alt={name}/>
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
  const isSmallDesktop = useMatchMedia('screen and (min-width: 1024px)')

  if (isMobile) {
    return (
      <section className='products container'>
        {description && <p className='text products__description'>{description}</p>}
        <h2 className='section-title products__title'>{title}</h2>
        <div className='products__items'>
          {
            items.map((item, i) =>
              <ProductInfoMobile
                key={`item-${i}`}
                icon={item.icon}
                name={item.name}
                tags={item.tags}
              />
            )
          }
        </div>
      </section>
    )
  } else if (isSmallDesktop) {
    return (
      <section className='products container'>
        <div className='inner-row'>
          <div className='inner-col'>
            <h2 className='section-title products__title'>{title}</h2>
            <div
              className='products__icons'
              onMouseLeave={() => setActiveItem(null)}
            >
              {
                items.map((item, i) =>
                  <ProductIcon
                    key={`icon-${i}`}
                    id={item.id}
                    name={item.name}
                    icon={item.icon}
                    rowAmount={rowAmount}
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                  />
                )
              }
            </div>
          </div>
          <div className='inner-col'>
            {description && <p className='text products__description'>{description}</p>}
            <div
              className={cn('products__info', {'products__info_no-descr' : !description})}
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
  } else {
    return (
      <section className='products container'>
        <div className={cn('inner-row products__title-container', {'products__title-container_mb-56' : titleMb})}>
          <div className='inner-col'>
            <h2 className='section-title products__title'>{title}</h2>
          </div>
          <div className='inner-col'>
            {description && <p className='text products__description'>{description}</p>}
          </div>
          </div>
        <div className='inner-row'>
          <div className='inner-col'>
            <div
              className='products__icons'
              onMouseLeave={() => setActiveItem(null)}
            >
              {
                items.map((item, i) =>
                  <ProductIcon
                    key={`icon-${i}`}
                    id={item.id}
                    name={item.name}
                    icon={item.icon}
                    rowAmount={rowAmount}
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                  />
                )
              }
            </div>
          </div>
          <div className='inner-col'>
            <div
              className='products__info'
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
}

export default Products
