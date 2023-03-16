import categoryimg1 from './media/categoryimg1.png'
import categoryimg2 from './media/categoryimg2.png'
import categoryimg3 from './media/categoryimg3.png'
import categoryimg4 from './media/categoryimg4.png'
import categoryimg5 from './media/categoryimg5.png'
import categoryimg6 from './media/categoryimg6.png'
import categoryimg7 from './media/categoryimg7.png'
import categoryimg8 from './media/categoryimg8.png'
import product1 from './media/product1.png'
import product2 from './media/product2.png'
import product3 from './media/product3.png'
import product4 from './media/product4.png'
import product5 from './media/product5.png'
import product6 from './media/product6.png'
import xurasan from './media/xurasan.png'
import chochqa from './media/chochqa.png'
import muzqaymoq from './media/muzqaymoq.png'
// icons
import serachIcon from './media/searchIcon.svg'
import shodark from './media/shopDark.svg'
import userIcon from './media/userIcon.svg'
import truckicon from './media/truckIcon.svg'
import shopicon from './media/shopIcon.svg'
import gifticon from './media/giftIcon.svg'
import locationIcon from './media/locationIcon.svg'
import next from './media/next.svg'
import logo from './media/logo.svg'
import heaericon from './media/hearicon.svg'
// style
import './style.css'
import { useState } from 'react'



function App() {

  const [headerinfos , setHeaderinfos] = useState([
    {
      icon: gifticon ,
      name: 'Up to -30% off ' ,
      text: 'on selected meals'
    },
    {
      icon: truckicon ,
      name: 'Free delivery' ,
      text: 'on all orders from $20'
    },
    {
      icon: shodark ,
      name: 'Free takeaway' ,
      text: 'on any order'
    }
  ])

  const [categores , setCategores] = useState([
    {
      img: categoryimg1 ,
      name: 'Lunch'
    },
    {
      img: categoryimg2 ,
      name: 'Italian'
    },
    {
      img: categoryimg3 ,
      name: 'Street food'
    },
    {
      img: categoryimg4 ,
      name: 'Sushi'
    },
    {
      img: categoryimg5 ,
      name: 'Asian'
    },
    {
      img: categoryimg6 ,
      name: 'Vegetarian'
    },
    {
      img: categoryimg6 ,
      name: 'Coffee & more'
    },
    {
      img: categoryimg8 ,
      name: 'Homecooked'
    },

  ])



  return (
    <div className="container">
      <nav>
        <div className="navmain">
          <img src={logo} alt="" />
          <a className='location' href=""><img src={locationIcon} alt="" /> <span>Delivery address</span></a>
          <ul>
            <li>Shops</li>
            <li>Restaurants</li>
          </ul>
          <div className="serach">
            <img src={serachIcon} alt="" />
            <input type="text" placeholder='Search restorants, dishes or goods'/>
          </div>
          <div className="navBtns">
            <button><img src={shopicon} alt="" /></button>
            <button><img src={userIcon} alt="" /></button>
          </div>
        </div>
      </nav>
      <header> 
          {
            headerinfos.map(headerinfo => (
              <div className="headerinfo">
                <div className="headerIcon">
                   <img src={headerinfo.icon} alt="" />
                </div>
                <div className="texts">
                  <span className='textName'>{headerinfo.name}</span>
                  <span className='textText'>{headerinfo.text}</span>
                </div>
              </div>
            ))
          }
      </header>
      <main>
        <div className="category">
          <div className="categoryHeader">
            <span>Restaurants</span>
            <button><span>See all</span><img src={next} alt="" /></button>
          </div>
          <div className="categores">
            {
              categores.map(category => (
                <div className="categoryMain">
                  <img src={category.img} alt="" />
                  <span>{category.name}</span>
                </div>
              ))
            }
          </div>
        </div>
        <div className="products">
          <div className="product">
            <div className="productHeader">

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;