// @flow

import React from 'react';
// import { Link } from 'react-router-dom';
import AuthTabs from './AuthTabs';

const styleSize = { maxWidth: 600 };
const Home = () => (
  <div className="md-grid">
    <header className="md-paper md-paper--2 md-toolbar md-background--primary md-toolbar--text-white md-toolbar--fixed">
      <h2 className="md-title md-title--toolbar">Yummy Recipes</h2>
    </header>
    <main>
      <div
        style={styleSize}
        className="md-paper md-paper--1 md-card md-background--card md-block-centered auth-block"
      >
        <p>Welcome to Yummy Recipes</p>
        <AuthTabs />
      </div>
    </main>
  </div>
);

export default Home;
