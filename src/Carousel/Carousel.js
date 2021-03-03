import './Carousel.scss';
import   index2 from  "../Image/2330931_740x550.jpg"
import   index3 from  "../Image/Aurora-Oriental-Beach.jpg"

import "./Carousel.scss"
function  Carousel() {

    return (
        <div className="carousel-wrapper">
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={index2} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={index3} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"> </span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"> </span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;