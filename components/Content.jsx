import React from 'react';
import List from './List'
import style from '../styles/landingpage.module.css'

const Content = () => (
  <div>
    <div className={style.apartment}>
        <div className={style.titlenew}>
            <h1>Newly Listed Apartments</h1>
            <p>Hundreds of homes ready for sale or rent</p>
        </div>
        <div className={style.aptlist}>

          <List img="./Images/apartments1.jpg"
              title="Qatari Apartments"
              item1="Swimming pool"
              item2="Luxury Balcony"
              item3="Security"
              price="$200/night" 
            />

          <List img="./Images/apartments2.jpg"
              title="Qatari Apartments Extra"
              item1="Swimming pool"
              item2="Luxury Balcony"
              item3="Security"
              price="$250/night"
            />

            
          <List img="./Images/apartments1.jpg"
              title="Qatari Apartments Lite"
              item1="Swimming pool"
              item2="Luxury Balcony"
              item3="Security"
              price="$180/night"
            />
        </div>

    </div>

    <div className={style.services}>
        <div className={style.servicestext}>
            <h2>Our Services</h2>
            <h1>How FindaPlace can help</h1>
        </div>
        <div className={style.collabo}>
            <div className={style.house}>
                <img src="./Images/colabo2.png" alt="" />
                <p>Get a house to rent</p>
            </div>

            <div className={style.house}>
                <img src="./Images/colabo1.png" alt="" />
                <p>Buy a new home</p>
            </div>

            <div className={style.house}>
                <img src="./Images/colabo.png" alt="" />
                <p>Be a partner with FindaPlace</p>
            </div>
        </div>
        
    </div>

    <div className={style.about}>
       <div className={style.combinedimages}>
           <img src="./Images/Component.png" alt="" />
       </div>

       <div className={style.aboutus}>
           <h3>About us</h3>
           <h1>Helping people to find <br /> dream homes</h1><br />
           <p><br />FindAPlace can help you easily find a place to rent or a home to stay from the comfort of your sofa. It is the simple difference between a house and a home that gives Jeff Cook Real Estate an edge. A real estate agent tries to sell a house to his clients, but Jeff and his teammates walk the extra mile to find a place for their clients, which the latter can call their home.

            Before taking their clients through the list, experts from the team dig deep into the dreams of their buyers to learn not just about the home they are looking for but to understand who they are. This helps in finding a home with the perfect neighborhood and community to make the stay enjoyable. Jeff and his company are known for putting effort into staying with their clients throughout the process..</p>
       </div>
   </div>
    
  </div>
);

export default Content;
