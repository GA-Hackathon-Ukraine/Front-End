import { Link } from 'react-router-dom';
import './SwipeSection.styles.css'
import React from 'react';
import ReactSwipe from 'react-swipe';
import caretakingsimple from '../../../src/caretakingsimple.svg'
import locationImg from '../../../src/location-red.svg'
import savedUnfilled from '../../../src/saved-unfilled.svg'
import constructionSimple from '../../../src/construction-simple.svg'
import cleaningSimple from '../../../src/cleaning-simple.svg'


const SwipeSection = () => {
  let reactSwipeEl;

  return (
    <div className="swipe-section">
      <div className="inner-section-swipe-section">
        <h2 className="section-title">Recommended Jobs</h2>
        <ReactSwipe
          className="carousel"
          swipeOptions={{ continuous: true }}
          ref={(el) => (reactSwipeEl = el)}
        >
          
        <Link to={"/job/4"}>
          <div className="slider-card-wrapper">
            <div className='slider-card'>
              <div className='slider-card-wrapper-upper'>
                  <img className='image-clean-forswipe' src={caretakingsimple}/>
              </div>
              <div className='slider-card-wrapper-bottom'>
                  <div className='slider-card-wrapper-bottom-upper'>
                    <div className='slider-card-wrapper-bottom-upper-title'>
                      <div><h4 className='position-title-swiper'>Nanny</h4></div>
                      <div className='slider-card-wrapper-bottom-upper-location'><img className='location-img-slider' src={locationImg} /><h5 className='location-wa'>Seattle, WA</h5></div>
                    </div>
                    <div><h5 className='company-title'>Kindercare Learning Centers</h5></div>
                  </div>
              </div>
                  <div className='slider-card-wrapper-bottom-bottom'>
                    <div className='hourly-rate'><h3 className='slider-card-wrapper-compensation'>$23</h3><span className='per-hour'>/Hour</span></div>
                    <div><span><div className="button-2 w-button move-up-btn">Details</div></span></div>
                  </div>
            </div>
            </div>
          </Link>
          <Link to={"/job/11"}>
          <div className="slider-card-wrapper">
            <div className='slider-card'>
              <div className='slider-card-wrapper-upper'>
                  <img className='image-clean-forswipe' src={cleaningSimple}/>
              </div>
              <div className='slider-card-wrapper-bottom'>
                  <div className='slider-card-wrapper-bottom-upper'>
                    <div className='slider-card-wrapper-bottom-upper-title'>
                      <div><h4 className='position-title-swiper'>House Cleaner</h4></div>
                      <div className='slider-card-wrapper-bottom-upper-location'><span><img className='location-img-slider' src={locationImg} /></span><h5 className='location-wa'>Tacoma, WA</h5></div>
                    </div>
                    <div><h5 className='company-title'>Clean Service</h5></div>
                  </div>
              </div>
                  <div className='slider-card-wrapper-bottom-bottom'>
                    <div className='hourly-rate'><h3 className='slider-card-wrapper-compensation'>$20</h3><span className='per-hour'>/Hour</span></div>
                    <div><span><div className="button-2 w-button move-up-btn">Details</div></span></div>
                  </div>
            </div>
            </div>
          </Link>
          <Link to={"/job/10"}>
          <div className="slider-card-wrapper">
            <div className='slider-card'>
              <div className='slider-card-wrapper-upper'>
                  <img className='image-clean-forswipe' src={constructionSimple}/>
              </div>
              <div className='slider-card-wrapper-bottom'>
                  <div className='slider-card-wrapper-bottom-upper'>
                    <div className='slider-card-wrapper-bottom-upper-title'>
                      <div><h4 className='position-title-swiper'>Construction Manager</h4></div>
                      <div className='slider-card-wrapper-bottom-upper-location'><span><img className='location-img-slider' src={locationImg} /></span><h5 className='location-wa'>Vancouver, WA</h5></div>
                    </div>
                    <div><h5 className='company-title'>Junio</h5></div>
                  </div>
              </div>
                  <div className='slider-card-wrapper-bottom-bottom'>
                    <div className='hourly-rate'><h3 className='slider-card-wrapper-compensation'>$35</h3><span className='per-hour'>/Hour</span></div>
                    <div><span><div className="button-2 w-button move-up-btn">Details</div></span></div>
                  </div>
            </div>
            </div>
          </Link>

        </ReactSwipe>
        <div className="swipesection-btn-wrapper">
          <button className="swipey" onClick={() => reactSwipeEl.prev()}>
            ←
          </button>
          <button className="swipey" onClick={() => reactSwipeEl.next()}>
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwipeSection;
