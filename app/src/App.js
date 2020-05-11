import React from 'react';
import '../exterrnal-libs/layout/index.css';
import './../exterrnal-libs/breakpoints/index.css';
import './components/header/header.pcss';
import './components/hero/hero.pcss';


import Header from './components/header/Header';
import Hero from './components/hero/Hero';
// import Products from './components/products/Products';
// import Features from './components/features/Features';
// import ToolboxApp from './components/toolbox-app/ToolboxApp';
// import Users from './components/users/Users';
// import FAQ from './components/faq/FAQ';
// import Contacts from './components/contacts/Contacts';
// import Footer from './components/footer/Footer';

// import './App.scss';

// import {IDEs, profilers} from './components/products/data'
// import {featuresList} from './components/features/data'
// import {usersList} from './components/users/data'


function App() {
  return (
    <div className="App">
      <Header/>
      <main className='main'>
        <Hero/>
      {/*  <Products data={IDEs} rowAmount={4}/>*/}
      {/*  <Products data={profilers} rowAmount={3} titleMb={true}/>*/}
      {/*  <hr className='separator'/>*/}
      {/*  <Features features={featuresList}/>*/}
      {/*  <ToolboxApp/>*/}
      {/*  <Users users={usersList}/>*/}
      {/*  <FAQ/>*/}
      {/*  <Contacts/>*/}
      </main>
      {/*<Footer/>*/}
    </div>
  );
}

export default App;
