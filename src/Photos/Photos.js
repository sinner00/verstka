import './Photos.scss';
import index8 from "../Image/1.jpg"
import index9 from "../Image/2.jpg"
import index10 from "../Image/3.jpg"
import index11 from "../Image/4.jpg"
import index12 from "../Image/5.jpg"
import index13 from "../Image/6.jpg"



function  Photos() {




    return (
      <div className="wrapper-photos-items">
          <div className="photos-wrapper container">
              <div className="photos-items-left">
                  <p className="photos-p1">
                      Look at photos of our interiors and spa saunas.
                  </p>
                  <p className="photos-p2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat dictum lacus, ut hendrerit mi pulvinar vel
                  </p>
                  <div className="wrapper-photos-p3">
                      <p className="photos-p3-number">
                          +1 (234) 569-78-98
                      </p>
                      <a href="/" className="photos-p3-link">
                          simple@simple.com
                      </a>
                  </div>
              </div>
              <div className="photos-items-right">
                  <div className="photos-wrapper-images">
                      <img src={index8} alt="" className="photos"/>
                      <img src={index9} alt="" className="photos"/>
                      <img src={index10} alt="" className="photos"/>
                  </div>
                  <div className="photos-wrapper-images">
                      <img src={index11} alt="" className="photos"/>
                      <img src={index12} alt="" className="photos"/>
                      <img src={index13} alt="" className="photos"/>
                  </div>



              </div>
          </div>
      </div>
    );
}

export default Photos;