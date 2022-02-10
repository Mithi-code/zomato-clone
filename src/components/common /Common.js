import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search';
import './common.css';

export const Common = () => {
  return (
    <div className='common-header'>
      <img
        className='logo'
        src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&amp;crop=198:42;*,*'
      />
      <div className='search'>
        <LocationOnIcon />
        <input type="text" className='input'placeholder="Search location" />
        <SearchIcon />
        <input type="text" className='input' placeholder="Search Your item here" />
      </div>
      <div className='profile'>
        My profile
      </div>
    </div>
  );
};
