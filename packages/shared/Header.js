import React from 'react';

const Header = ({ title = 'Header Title' }) => (
  <header
    style={{
      backgroundColor: 'black',
      padding: 20,
      marginBottom: 20,
      color: 'white',
    }}
  >
    <span style={{ fontSize: '1.8rem' }}>{title}</span>
  </header>
);

export default Header;
