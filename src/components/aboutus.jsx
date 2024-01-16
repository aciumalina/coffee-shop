import React from 'react';
import '../cssStyles/AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <h2>About Us</h2>
            <p>Welcome to Caffeine Corner, where passion for coffee meets warm hospitality!</p>

            <div className="history">
                <h3>Our Story</h3>
                <p>
                    Founded in 2010, Caffeine Corner has been a cozy retreat for coffee enthusiasts and a gathering place for friends.
                    Our journey started with a simple idea: to create a space where people can enjoy quality coffee in a relaxed atmosphere.
                </p>
                <p>
                    Over the years, our commitment to excellence and dedication to our customers have made us a beloved part of the community.
                    We take pride in serving the finest coffee beans and providing an exceptional experience to every visitor.
                </p>
            </div>

            <div className="meet-our-members">
                <h3>Meet Our Members</h3>
                <div className="staff-members">
                    <div className="staff-member">
                        <img src={require('../images/staff_1.avif')} alt="Staff Member 1" />
                        <p>Emily Collins</p>
                        <p>Founder</p>
                    </div>

                    <div className="staff-member">
                        <img src={require('../images/staff_2.avif')} alt="Staff Member 2" />
                        <p>Sarah Parker</p>
                        <p>Head Barista</p>
                    </div>

                    <div className="staff-member">
                        <img src={require('../images/stafff_3.avif')} alt="Staff Member 1" />
                        <p>Mellissa Brown</p>
                        <p>Barista</p>
                    </div>

                    <div className="staff-member">
                        <img src={require('../images/staff_5.avif')} alt="Staff Member 1" />
                        <p>Chadwick Huson</p>
                        <p>Barista</p>
                    </div>

                    <div className="staff-member">
                        <img src={require('../images/staff_4.jpg')} alt="Staff Member 1" />
                        <p>Dina Moore</p>
                        <p>Barista</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AboutUs;
