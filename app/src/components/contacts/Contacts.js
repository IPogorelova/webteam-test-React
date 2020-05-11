import * as React from 'react'

const Contacts = () => {
  const [email, setEmail] = React.useState('')

  return (
    <section className='wt-section_bg_gray-light contacts'>
      <div className='wt-container contacts__inner'>
        <div className='wt-row wt-row_size_l wt-row-md_size_m wt-row-sm_direction_column'>
          <div className='wt-col wt-col-6 wt-col-sm-12'>
            <h2 className='contacts__title'>Stay updated</h2>
            <form className='contacts__form'>
              <label className='visually-hidden' htmlFor='email'>Your email</label>
              <input
                id='email'
                className='text-input'
                type='email'
                name='subscription'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Your Email'
              />
              <label className='check'>
                <input
                  className='check__input'
                  type='checkbox'
                  name='privacy policy'
                />
                <span className='check__box'>
                  <span className='check__tick'/>
                </span>
                By submitting this form I agree to the <a href='https://www.jetbrains.com/company/privacy.html'>JetBrains Privacy Policy</a>
              </label>
              <button
                className='button'
                type='submit'
                onClick={(e) => e.preventDefault()}
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className='wt-col wt-col-6 wt-col-sm-12 wt-offset-top-sm-48'>
            <h3 className='contacts__subtitle'>Follow us</h3>
            <ul className='contacts__socials'>
              <li className='contacts__social-item'>
                <a href='https://twitter.com/jetbrains' className='contacts__link'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20">
                    <path fill="#F76707" fillRule="evenodd" d="M23 2.374a9.155 9.155 0 0 1-2.705.805c.977-.604 1.73-1.609 2.067-2.776-.903.564-1.917 1.005-3.007 1.207C18.489.643 17.288 0 15.897 0c-2.592 0-4.734 2.253-4.734 5.07 0 .403.036.765.112 1.168-3.87-.242-7.33-2.254-9.658-5.313A5.26 5.26 0 0 0 .978 3.46c0 1.771.826 3.302 2.105 4.225-.79-.04-1.504-.24-2.143-.643v.081c0 2.454 1.615 4.467 3.795 4.95-.413.12-.825.16-1.24.16-.3 0-.6-.04-.903-.08.604 2.012 2.33 3.461 4.398 3.501-1.615 1.368-3.645 2.172-5.863 2.172-.375 0-.752-.04-1.127-.08A12.58 12.58 0 0 0 7.216 20c8.681 0 13.454-7.687 13.454-14.366V4.99A10.667 10.667 0 0 0 23 2.374"/>
                  </svg>
                  @AllProductsPack on Twitter
                </a>
              </li>
              <li className='contacts__social-item'>
                <a href='https://blog.jetbrains.com/' className='contacts__link'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <path fill="#F76707" fillRule="evenodd" d="M3.292 5a7.48 7.48 0 0 1 6.75 4.285A7.48 7.48 0 0 1 16.792 5H20v11h-3.208a7.235 7.235 0 0 0-6.75 4 7.236 7.236 0 0 0-6.75-4H0V5zM10 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>
                  </svg>
                  JetBrains Blog
                </a>
              </li>
              <li className='contacts__social-item'>
                <a href='https://youtrack.jetbrains.com/issues' className='contacts__link'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19">
                    <path fill="#F76707" fillRule="evenodd" d="M2 13v6H0v-4a2 2 0 0 1 2-2zm14 0a2 2 0 0 1 2 2v4h-2zM9 3a5.987 5.987 0 0 1 5.648 4H18v2h-3v4a6 6 0 1 1-12 0V9H0V7h3.352A5.987 5.987 0 0 1 9 3zM5 0a2 2 0 0 1 2 2H2V0zm11 0v2h-5a2 2 0 0 1 2-2h3z"/>
                  </svg>
                  Bug and Issue Tracker
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts
