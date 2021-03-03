import './Services.scss';
import   index4 from  "../Image/beauty.png"
import   index5 from  "../Image/massage.png"
import   index6 from  "../Image/spa.png"
import   index7 from  "../Image/banner.jpg"


import "./Services.scss"
function  Services() {

    return (
        <div className="container wrapper-services ">
          <div className="services-items">
              <div className="services one">
                  <img src={index4} alt="" className="services-img"/>
                  <h1 className="services-h1">
                      Beauty
                  </h1>
                  <p className="services-description">
                      High-quality premium for face
                      and body care
                  </p>
                  <div className="button-wrapper ">
                      <button className="button-services o">
                          Read More
                      </button>
                  </div>
              </div>
              <div className="services two">
                  <img src={index5} alt="" className="services-img"/>
                  <h1 className="services-h2">
                      Message
                  </h1>
                  <p className="services-description">
                      Professional cosmetics and
                      tender procedures
                  </p>
                  <div className="button-wrapper">
                      <button className="button-services t">
                          Read More
                      </button>
                  </div>
              </div>
              <div className="services three">
                  <img src={index6} alt="" className="services-img"/>
                  <h1 className="services-h3">
                      Spa
                  </h1>
                  <p className="services-description">
                      Professional massage experts
                      from Thailand

                  </p>
                  <div className="button-wrapper">
                      <button className="button-services th">
                          Read More
                      </button>
                  </div>
              </div>
          </div>
            <div className="wrapper-banner">
                <img src={index7} alt="" className="banner-img"/>
            </div>
        </div>

    );
}

export default Services;