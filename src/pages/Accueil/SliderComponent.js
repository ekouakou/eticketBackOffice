import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { height } from '@fortawesome/free-solid-svg-icons/fa2';

const SliderComponent = ({ sliderData, numberSlidesToShow, slideMargin }) => {
  // Vérifier si images est défini

  console.log('edededeed');
  console.log(sliderData);


  const CustomArrow = ({ onClick, direction,iconClass }) => {
      return (
        <div
          className={`cast-${direction}`}
          onClick={onClick}
        >
          <i className={iconClass}></i>
        </div>
      );
  };
  

  // Configuration des paramètres du slider
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: numberSlidesToShow,
    slidesToScroll: 1,
    prevArrow: <CustomArrow iconClass="flaticon-double-right-arrows-angles" direction="prev" />,
    nextArrow: <CustomArrow iconClass="flaticon-double-right-arrows-angles" direction="next" />
  };

  

  return (
    <Slider {...settings}>
          {sliderData.map((image, index) => (


            <div className='h-70 br-15'>
                <section class="banner-section ">
                  <div class="banner-bg bg_img bg-fixed br-15" style= {{ backgroundImage: `url(assets/images/banner/${image.STR_SLIDERIMAGE})`}}>
                    <div className="epic-stage__metadata epic-stage__metadata--logged-out pb-3 br-15">
                        <div className="epic-stage__metadata__subtitle dark-content">
                          <span>Action</span>
                        </div>
                        <div id="ember321" className="epic-stage__description lt-line-clamp lt-line-clamp--multi-line ember-view"
                          style={{ WebkitLineClamp: 3 }}
                        >
                          Matt Damon and Casey Affleck star as amateur thieves on the run. Premieres August&nbsp;9.
                        </div>
                        <div className="epic-stage__cta-container">
                          <ul className="video-data-services-buttons__list">
                            <li className="video-data-services-buttons__list-item">
                              <button
                                title="Accept Free Trial"
                                className="video-data-services-button typography-title-3-emphasized"
                                
                              >
                                <span className="video-data-services-button__text">Acchetez vos tickets</span>
                              </button>
                            </li>
                          </ul>
                        </div>
                    </div>
                  </div>
                </section>
            </div>
          ))}
    </Slider>
  );
};

export default SliderComponent;





