import React, {useState} from 'react';
// import { Link } from 'react-router-dom';
import Carousel from 'nuka-carousel';

import '../../assets/frontend/css/owl.carousel.min.css';
import '../../assets/frontend/css/owl.theme.default.min.css';
import slider1 from '../../assets/frontend/images/slider-main/bg3.jpg';

const Slider = () => {

    const [animation] = useState(undefined);
    const [autoplay] = useState(true);
    const [cellAlign] = useState("left");
    const [cellSpacing] = useState(0);
    const [heightMode] = useState("max");
    const [scrollMode] = useState("remainder");
    const [slideIndex] = useState(0);
    const [slidesToScroll] = useState(1);
    const [slidesToShow] = useState(1);
    const [transitionMode] = useState("scroll");

    return(
        <div>
            <Carousel
                cellSpacing={cellSpacing}
                animation={animation}
                autoplay={autoplay}
                cellAlign={cellAlign}
                heightMode={heightMode}
                scrollMode={scrollMode}
                slideIndex={slideIndex}
                slideListMargin={0}
                slidesToScroll={slidesToScroll}
                slidesToShow={slidesToShow}
                transitionMode={transitionMode}
            >
                <img src={slider1} alt="Slider one" style={{ height: heightMode === "current" ? 100 : 400 }} />

                <img src={require('../../assets/frontend/images/slider-main/bg4.jpg')} alt="Slider two" style={{ height: heightMode === "current" ? 100 : 400 }} />

                <img src={require('../../assets/frontend/images/slider-main/bg6.jpg')} alt="Slider two" style={{ height: heightMode === "current" ? 100 : 400 }} />

                <img src={require('../../assets/frontend/images/slider-main/bg5.jpg')} alt="Slider two" style={{ height: heightMode === "current" ? 100 : 400 }} />

                <img src={require('../../assets/frontend/images/slider-main/bg2.jpg')} alt="Slider two" style={{ height: heightMode === "current" ? 100 : 400 }} />
            </Carousel>
        </div>
    )
}

export default Slider;