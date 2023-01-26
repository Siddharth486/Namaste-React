import React from 'react';
import ReactDOM from 'react-dom/client';
import LogoComponent from './LogoComponent';
import SearchBarComponent from './SearchComponent';
import MenuComponent from './MenuComponent';

const HeaderComponent = () => {
  return (<div className="header" key="header">
    <LogoComponent />
    <SearchBarComponent />
    <MenuComponent />
  </div>)
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderComponent />);