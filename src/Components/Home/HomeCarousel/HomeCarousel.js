import React from 'react';
import './HomeCarousel.css'
import caroImg1 from '../../../images/carousel-1.png'
import caroImg2 from '../../../images/carousel-2.png'
import caroImg3 from '../../../images/carousel-3.png'
import caroImg4 from '../../../images/carousel-4.png'
import caroImg5 from '../../../images/carousel-5.png'

const HomeCarousel = () => {
    return (
        <div className="carouselSection">
            <div className="container  my-3">
                <div className="row mx-auto my-auto">
                    <div id="recipeCarousel" className="carousel slide carouselElement" data-ride="carousel">
                        <h4 className="text-white carouselTitle">Here are some of <span style={{ color: "#7AB259" }}>our works</span></h4>
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active d-flex justify-content-center">
                                <img className="d-block col-4 img-fluid" src={caroImg1} />
                                <img className="d-block col-4 img-fluid" src={caroImg4} />
                                <img className="d-block col-4 img-fluid" src={caroImg5} />
                            </div>
                            <div class="carousel-item">
                                <img className="d-block col-4 img-fluid" src={caroImg2} />
                            </div>
                            <div class="carousel-item">
                                <img className="d-block col-4 img-fluid" src={caroImg3} />
                            </div>
                            <div class="carousel-item">
                                <img className="d-block col-4 img-fluid" src={caroImg1} />
                            </div>
                            <div class="carousel-item">
                                <img className="d-block col-4 img-fluid" src={caroImg5} />
                            </div>
                            <div class="carousel-item">
                                <img className="d-block col-4 img-fluid" src={caroImg3} />
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#recipeCarousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#recipeCarousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCarousel;