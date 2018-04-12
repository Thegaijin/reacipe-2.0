import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { FontIcon, TabsContainer, Tabs, Tab } from 'react-md';

import LoginForm from '../components/forms/LoginForm';
import RegistrationForm from '../components/forms/RegistrationForm';

const AuthTabs = () => (
  <TabsContainer panelClassName="md-grid" colored>
    <Tabs tabId="simple-tab" mobile inactiveTabClassName="md-text--secondary">
      <Tab label="Register" icon={<FontIcon>create</FontIcon>}>
        <RegistrationForm />
      </Tab>
      <Tab label="Login" icon={<FontIcon>accessibility</FontIcon>}>
        <LoginForm />
      </Tab>
    </Tabs>
  </TabsContainer>
);

export default AuthTabs;
