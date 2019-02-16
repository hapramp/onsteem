import React, { PureComponent } from 'react';
import style from './style.module.css'

import heroImage from './static/img/heroImage.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChrome, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

class Hero extends PureComponent {
    render() {
        return (
            <section>
                <div className="container">
                    <div className={style.heroWrapper}>
                        <div className={style.heroMeta}>
                            <h1 className={`${style.heroTitle} text-color-primary`}>Social media that pays you</h1>
                            <p className={style.heroText}>Imagine if you get paid for ‘likes’. Earn for the entertainment, possibilities, and art you create on the Internet.</p>
                            <div className={style.heroCta}>
                                <a href=""><FontAwesomeIcon icon={faChrome} color="#3F72AF" /></a>
                                <a href=""><FontAwesomeIcon icon={faGooglePlay} color="#3F72AF" /></a>
                            </div>
                        </div>
                        <div className="heroImage">
                            <img src={heroImage} alt="Hero Image"/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;