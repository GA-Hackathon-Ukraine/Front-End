import './SwipeSection.styles.css'
import React from 'react';
import ReactSwipe from 'react-swipe';
import caretakingsimple from '../../../src/caretakingsimple.svg'
import locationImg from '../../../src/location-red.svg'
import savedUnfilled from '../../../src/saved-unfilled.svg'
import arrowRight from '../../../src/arrow-right.svg'
import constructionSimple from '../../../src/construction-simple.svg'
import cleaningSimple from '../../../src/cleaning-simple.svg'

const SwipeSection = () => {
  let reactSwipeEl;
 
  return (
    <div className='swipe-section'>
      <div className='inner-section-swipe-section'>
      <h2 className='section-title'>Recommended Jobs</h2>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: true }}
        ref={el => (reactSwipeEl = el)}
      >
        <div className="slider-card-wrapper">
          <div className='slider-card'>
            <div className='slider-card-wrapper-upper'>
                <img className='image-clean-forswipe' src={caretakingsimple}/>
            </div>
            <div className='slider-card-wrapper-bottom'>
                <div className='slider-card-wrapper-bottom-upper'>
                  <div className='slider-card-wrapper-bottom-upper-title'>
                    <div><h4 className='position-title'>Preschool Teacher Assistant</h4></div>
                    <div className='slider-card-wrapper-bottom-upper-location'><span><img className='location-img-slider' src={locationImg} /></span><h5 className='location-wa'>Seattle, WA</h5></div>
                  </div>
                  <div><h5 className='company-title'>Kindercare Learning Centers</h5></div>
                </div>
            </div>
                <div className='slider-card-wrapper-bottom-bottom'>
                  <div className='hourly-rate'><h3 className='compensation'>$45</h3><span className='per-hour'>/Hour</span></div>
                  <div><span><img className='save-btn-swipe-section' src={savedUnfilled} /></span></div>
                </div>
          </div>
          </div>

          <div className="slider-card-wrapper">
          <div className='slider-card'>
            <div className='slider-card-wrapper-upper'>
                <img className='image-clean-forswipe' src={constructionSimple}/>
            </div>
            <div className='slider-card-wrapper-bottom'>
                <div className='slider-card-wrapper-bottom-upper'>
                  <div className='slider-card-wrapper-bottom-upper-title'>
                    <div><h4 className='position-title'>Construction Manager</h4></div>
                    <div className='slider-card-wrapper-bottom-upper-location'><span><img className='location-img-slider' src={locationImg} /></span><h5 className='location-wa'>Tacoma, WA</h5></div>
                  </div>
                  <div><h5 className='company-title'>Barry's Builders</h5></div>
                </div>
            </div>
                <div className='slider-card-wrapper-bottom-bottom'>
                  <div className='hourly-rate'><h3 className='compensation'>$45</h3><span className='per-hour'>/Hour</span></div>
                  <div><span><img className='save-btn-swipe-section' src={savedUnfilled} /></span></div>
                </div>
            </div>
            
          </div>
          <div className="slider-card-wrapper">
          <div className='slider-card'>
            <div className='slider-card-wrapper-upper'>
                <img className='image-clean-forswipe' src={cleaningSimple}/>
            </div>
            <div className='slider-card-wrapper-bottom'>
                <div className='slider-card-wrapper-bottom-upper'>
                  <div className='slider-card-wrapper-bottom-upper-title'>
                    <div><h4 className='position-title'>Housekeeper</h4></div>
                    <div className='slider-card-wrapper-bottom-upper-location'><span><img className='location-img-slider' src={locationImg} /></span><h5 className='location-wa'>Renton, WA</h5></div>
                  </div>
                  <div><h5 className='company-title'>Tidy Homes</h5></div>
                </div>
            </div>
                <div className='slider-card-wrapper-bottom-bottom'>
                  <div className='hourly-rate'><h3 className='compensation'>$45</h3><span className='per-hour'>/Hour</span></div>
                  <div><span><img className='save-btn-swipe-section' src={savedUnfilled} /></span></div>
                </div>
          </div>
        </div>
        
        </ReactSwipe>
        {/* <div className='slide-to-see-more-wrapper'>
          <div className='slide-to-see-more'><h5 className='swipe-right-section'>Swipe</h5><img src={arrowRight}/></div>
        </div> */}
      <div className='swipesection-btn-wrapper'>
        <button className="swipey" onClick={() => reactSwipeEl.prev()}>←</button>
        <button className="swipey" onClick={() => reactSwipeEl.next()}>→</button>
      </div>
      </div>
    </div>
  );
}

export default SwipeSection