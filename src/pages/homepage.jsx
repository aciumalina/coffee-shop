import React from 'react';
import '../cssStyles/HomePage.css';
import coffeeBeansImage from '../images/coffee_beans.webp';
import AboutUs from '../components/aboutus';

const HomePage = () => {
    return (
        <div>
            <div className="home-container" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), url(${coffeeBeansImage})` }}>
                <div className="home-content">
                    <h1>Welcome to Caffeine Corner</h1>
                    <p>Discover the perfect blend of flavors at Caffeine Corner, where passion meets the art of coffee. Our cozy ambiance and expertly crafted beverages make every visit a delightful experience.</p>
                    <p>Indulge in the rich aroma of freshly brewed coffee and savor the unique taste of our specialty drinks. Whether you're a coffee connoisseur or a casual sipper, we have something to tantalize your taste buds.</p>
                    <p>Join us for a relaxing coffee break, socialize with friends, or find a quiet corner to work. Caffeine Corner is more than a coffee shop; it's a place to create memories, enjoy conversations, and embrace the warmth of exceptional coffee.</p>
                </div>

            </div>
            <section id="#about-us">
                <div style={{ backgroundColor: "#d1ac71" }}>
                    <AboutUs />
                </div>
            </section>
        </div>

    );

};

export default HomePage;