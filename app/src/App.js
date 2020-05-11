import React from 'react';
import '../exterrnal-libs/layout/index.css';
import './../exterrnal-libs/breakpoints/index.css';
import './components/header/header.pcss';
import './components/hero/hero.pcss';
import './components/products/products.pcss';
import './components/products/productsItem.pcss';
import './components/products/tag.pcss';
import './components/features/features.pcss';
import './components/features/featuresItem.pcss';
import './components/toolboxApp/toolboxApp.pcss';
import './components/users/users.pcss';
import './components/faq/faq.pcss';
import './components/contacts/contacts.pcss';
import './components/footer/footer.pcss';

import Header from './components/header/Header';
import Hero from './components/hero/Hero';
// import Products from './components/products/Products';
import Features from './components/features/Features';
import ToolboxApp from './components/toolboxApp/ToolboxApp';
import Users from './components/users/Users';
import FAQ from './components/faq/FAQ';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';

// import {IDEs, profilers} from './components/products/data'
import {featuresList} from './components/features/data'
import {usersList} from './components/users/data'


function App() {
  return (
    <div className="App">
      <Header/>
      <main className='main'>
        <Hero/>
      {/*  <Products data={IDEs} rowAmount={4}/>*/}
      {/*  <Products data={profilers} rowAmount={3} titleMb={true}/>*/}
        <hr className="separator wt-offset-top-96 wt-offset-top-sm-48"/>
        <Features features={featuresList}/>
        <ToolboxApp/>
        <Users users={usersList}/>
        <FAQ/>
        <Contacts/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
