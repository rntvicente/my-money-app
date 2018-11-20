import '../common/template/dependencies';
import React from 'react';

import Routes from './routes';
import Header from '../common/template/header';
import SideBar from '../common/template/side-bar';
import Footer from '../common/template/footer';

export default props => (
  <div className="wrapper">
    <Header />
    <SideBar />
    <div className='content-wrapper'>
      <Routes />
    </div>
    <Footer />
  </div>
)
