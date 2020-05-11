import * as React from 'react'

const Users = ({users}) => {
  return (
    <section className='wt-container wt-offset-top-96 wt-offset-top-sm-48 users' id='users'>
      <div className='wt-row wt-row_size_l wt-row-md_size_0 wt-row-md_justify_between wt-row-sm_direction_column'>
        <div className='wt-col wt-col-3 wt-col-lg-4 wt-col-sm-12 users__title-wrapper'>
          <p className='users__title'>Trusted by 320,083 businesses worldwide</p>
        </div>
        <div className='wt-col wt-col-9 wt-col-lg-8 wt-col-md-auto-fill wt-col-sm-12 wt-offset-top-sm-12 users__items'>
          <div className="wt-row wt-row_size_l wt-row-md_size_0 wt-row-sm_size_s">
            {
              users.map((item, i) =>
                <div key={`user-${i}`} className='wt-col wt-col-4 wt-col-sm-6 users__icon'>
                  <img src={`/app/static/images/users/${item.icon}`} alt={item.alt}/>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </section>
  )
}


export default Users
