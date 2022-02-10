import React from 'react';
import './explore.css';

export const Explore = () => {
  return (
      <div className="explore-options">
        <h1>Explore other options for you here</h1>
        <div className="popular-cuisines">
         <p className="options">Popular cuisines near me</p>
         <div className="cuisines-links link">
           <a href="#">Sea food</a>
           <span>..</span>
           <a href="#">Fish</a>
           <span>..</span>
           <a href="#">Chicken</a>
           <span>..</span>
           <a href="#">Bakery Food near me</a>
           <span>..</span>
           <a href="#">cafe Naer Me</a>
           <span>..</span>
           <a href="#">Burger food near me</a>
           <span>..</span>
         </div>
        </div>
        <div className="popular-resturants">
         <p className="options">Popular restaurant types near me</p>
         <div className="resturants-links link">
           <a href="#">Sea food</a>
           <span>°</span>
           <a href="#">Fish</a>
           <span>..</span>
           <a href="#">Chicken</a>
           <span>..</span>
           <a href="#">Bakery Food near me</a>
           <span>..</span>
           <a href="#">cafe Naer Me</a>
           <span>..</span>
           <a href="#">Burger food near me</a>
           <span>..</span>
         </div>
        </div>
        <div className="popular-resturant-chains">
         <p className="options">Top Restaurant Chains</p>
         <div className="resturants-chain-links link">
           <a href="#">Biryani Blues</a>
           <a href="#">Fish Cutlet</a>
           <a href="#">Burger King</a>
           <a href="#">Domoni's</a>
           <a href="#">KFC</a>
           <a href="#">WOW! Momo</a>
           <a href="#">Krispy Kreme</a>
           <a href="#">Pizza Hut</a>
           <a href="#">McDonald's</a>
         </div>
        </div>
      </div>
  )
};
