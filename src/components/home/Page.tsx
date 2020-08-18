import React, { Fragment } from 'react';
import './Page.css';
import { FadeInSection } from './FadeInSection';

export const Page = () => {
  return (
    <Fragment>
      <div className="home-flex-container">
        <h1 className="home-title">Fresh Filled Sicilian Cannoli</h1>

        <div className="home-grid-container-top">
          <FadeInSection direction="from-left">
            <div className="left-section">
              Cannoli Windsor makes Sicilian Cannolis with the freshest and
              highest quality ingredients. Every Sicilian cannoli starts with
              homemade vanilla sugar, imported Sicilian shells, and local
              ricotta cheese.
            </div>
          </FadeInSection>
          <div className="image-center">
            <FadeInSection direction="from-right">
              <div className="image-slide right-section">
                <img
                  className="home-image-one"
                  src="https://cannoli-images.s3.us-east-2.amazonaws.com/cannoli-sicilian.jpg"
                  alt=""
                />
              </div>
            </FadeInSection>
          </div>
        </div>

        <div className="home-grid-container-second">
          <div className="image-center-start">
            <FadeInSection direction="from-left">
              <img
                className="home-image-two"
                src="https://cannoli-windsor.s3.amazonaws.com/cannoli-images/cannolis-4.jpg"
                alt=""
              />
            </FadeInSection>
          </div>
          <FadeInSection direction="from-right">
            <div className="">
              Cannoli Windsor values quality, supporting local, and engaging
              with the Windsor community.
            </div>
          </FadeInSection>
        </div>

        <div className="home-grid-container-social-media">
          <div className="social-media">
            <FadeInSection direction="">
              <a href="https://www.instagram.com/cannoliwindsor/">
                <img
                  className="instagram-social-media"
                  src="https://cannoli-windsor.s3.amazonaws.com/cannoli-images/instagram-sketched.svg"
                  alt="instagram"
                />
              </a>
            </FadeInSection>
          </div>
          <div className="text-social">
            <FadeInSection direction="">
              <div>
                Find us at the Downtown Windsor Farmers Market every Saturday or
                at East Valley Pizza. We are on Instagram and appreciate
                everyone who has been sharing everything we deliver on social
                media.
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
