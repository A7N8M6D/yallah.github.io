import React from 'react'
import '../../App.css';
import './Banner.css';
const Banner = () => {
    return (
        <div className='Banner container'>
            <div className='Banner-main'>
                <div className='Banner-text'>
                    <div className='Banner-text-main'>
                        <p>
                            OUR VIDEO
                        </p>
                        <h1>
                            Orions is a fast and secure app that was built for both Android and iOS platforms.
                        </h1>
                        <div>
                            <a className='button1'>
                                Get Started
                            </a>
                        </div>
                    </div>
                <img className='img2' src='./IMG/Banner/pattern.jpg'>

                </img>
                </div>
                <div className='Banner-img'>
                  <img src='./IMG/Banner/banner-img.jpg'></img>
                  <i class="fa-solid fa-play"></i>
                </div>
            </div>
        </div>
    )
}

export default Banner;
