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
import timeIcon from './media/timeIcon.svg'
import minishop from './media/minishop.svg'
import facebook from './media/Facebook.svg'
import twitter from './media/Twitter.svg'
// style
import './style.css'
import { useState } from 'react'
import { AiOutlineStar } from 'react-icons/ai'
// bran images
import brend1 from './media/brand1.png'
import brend2 from './media/brand2.png'
import brend3 from './media/brand3.png'
import brend4 from './media/brand4.png'
import brend5 from './media/brand5.png'
import brend6 from './media/brand6.png'
import brend7 from './media/brand7.png'
import brend8 from './media/brand8.png'
import brend9 from './media/brand9.png'
import brend10 from './media/brand10.png'
import brend11 from './media/brand11.png'
import brend12 from './media/brand12.png'



function App() {

  const [headerinfos, setHeaderinfos] = useState([
    {
      icon: gifticon,
      name: 'Up to -30% off ',
      text: 'on selected meals'
    },
    {
      icon: truckicon,
      name: 'Free delivery',
      text: 'on all orders from $20'
    },
    {
      icon: shodark,
      name: 'Free takeaway',
      text: 'on any order'
    }
  ])

  const [categores, setCategores] = useState([
    {
      img: categoryimg1,
      name: 'Lunch'
    },
    {
      img: categoryimg2,
      name: 'Italian'
    },
    {
      img: categoryimg3,
      name: 'Street food'
    },
    {
      img: categoryimg4,
      name: 'Sushi'
    },
    {
      img: categoryimg5,
      name: 'Asian'
    },
    {
      img: categoryimg6,
      name: 'Vegetarian'
    },
    {
      img: categoryimg6,
      name: 'Coffee & more'
    },
    {
      img: categoryimg8,
      name: 'Homecooked'
    },
  ])

  const [products, setProducts] = useState([
    {
      img: product1,
      name: 'City Sandwiches And Coffee'
    },
    {
      img: product2,
      name: 'Kochi Korean Food'
    },
    {
      img: product3,
      name: 'Easy Hummus Izraeli Streetfood'
    },
    {
      img: product4,
      name: 'Camorra Pizza & Birra'
    },
    {
      img: product5,
      name: 'Samir’s Original Turkish Kebab'
    },
    {
      img: product6,
      name: 'Granny’s Traditional Food'
    }
  ])

  const [shops, setShop] = useState([
    {
      name: "Special offers on",
      info: "Ice Cream!",
      btnText: "Discover",
      img: muzqaymoq,
      bc: '#FFEFF3'
    },
    {
      name: "Free delivery",
      info: "from $20",
      btnText: "Shop now",
      img: chochqa,
      bc: '#EFF5FF'
    },
    {
      name: "-25% on bakery",
      info: "after 20:00",
      btnText: "See prices",
      img: xurasan,
      bc: '#FFF4EF'
    }
  ])

  const [brand, setBrand] = useState([
    {
      img: brend1
    },
    {
      img: brend2
    },
    {
      img: brend3
    },
    {
      img: brend4
    },
    {
      img: brend5
    },
    {
      img: brend6
    },
    {
      img: brend7
    },
    {
      img: brend8
    },
    {
      img: brend9
    },
    {
      img: brend10
    },
    {
      img: brend11
    },
    {
      img: brend12
    }
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
            <input type="text" placeholder='Search restorants, dishes or goods' />
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
          {
            products.map(product => (
              <div className="product">
                <div className="productHeader">
                  <button className='productStar'><AiOutlineStar /><span>5.0</span></button>
                  <button className='productHear'><img src={heaericon} alt="" /></button>
                </div>
                <div className="productImg">
                  <img src={product.img} alt="" />
                </div>
                <div className="productend">
                  <span className='productName'>{product.name}</span>
                  <div className="productInfos">
                    <button><img src={timeIcon} alt="" /><span>20-30m</span></button>
                    <button><img src={minishop} alt="" /><span>from $2</span></button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="shops">
          <div className="categoryHeader">
            <span>Restaurants</span>
            <button><span>See all</span><img src={next} alt="" /></button>
          </div>
          <div className="shopCards">
            {
              shops.map(shop => (
                <div className="shop" style={{ background: shop.bc }}>
                  <div className="shopinfo">
                    <span className="shopName">{shop.name}</span>
                    <span className="shopInfo">{shop.info}</span>
                    <button>{shop.btnText}</button>
                  </div>
                  <div className="shopImg">
                    <img src={shop.img} alt="" />
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="brands">
          {
            brand.map(brends => (
              <div className="brand">
                <img src={brends.img} alt="" />
              </div>
            ))
          }
        </div>
      </main>
      <footer>
        <div className="footerTop">
          <div className="footerTopMain">
            <div className="footerTopLeft">
              <img src={logo} alt="" />
            </div>
            <div className="footerTopRight">
              <span>Follow us</span>
              <a href="#"><button><img src={facebook} alt="" /></button></a>
              <a href="#"><button><img src={twitter} alt="" /></button></a>
            </div>
          </div>
        </div>
        <div className="footerBootom">
          <div className="footerBootomLeft">
            <ul>
              <li>For the restaurants</li>
              <li>Press-centre</li>
              <li>Career</li>
            </ul>
            <ul>
              <li>For the customers</li>
              <li>Discounts</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="footerBootomRight">
            <span>© 2022 «Komilov»</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
