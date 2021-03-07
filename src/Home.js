import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img 
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_2x._CB431858162_.jpg"
                alt=""
            />

            {/* Product id, title, price, rating, image */}

            <div className="home__row">
                <Product 
                    id="0307887898" 
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                />
                <Product 
                    id="B0043D28B4" 
                    title="LAMAZE Peek-A-Boo Forest, Fun Interactive Baby Book with Inspiring Rhymes and Stories, Multi, one Size (L27901B)"
                    price={14.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/91xxqc9IwcL._SX679_.jpg"
                />
            </div>


            <div className="home__row">
                <Product 
                    id="B00UMVVUOC" 
                    title="Victrola Vintage 3-Speed Bluetooth Portable Suitcase Record Player with Built-in Speakers | Upgraded Turntable Audio Sound| Includes Extra Stylus | Turquoise, Model Number: VSC-550BT-TQ"
                    price={45.44}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/716pgZxRYhL._AC_SX679_.jpg"
                />
                <Product 
                    id="B079S6GZCJ" 
                    title="Hatchimals CollEGGtibles, 4 Pack + Bonus, Season 4 Hatchimals CollEGGtible, for Ages 5 and Up (Styles and Colors May Vary)"
                    price={11.98}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/91ny13-KzkL._AC_SL1500_.jpg"
                />
                <Product 
                    id="B003N9M6YI" 
                    title="Nuby Ice Gel Teether Keys"
                    price={3.98}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/61Ehw9y8J0L._SL1000_.jpg"
                />
            </div>


            {/* Product  */}


        </div>
    )
}

export default Home
 