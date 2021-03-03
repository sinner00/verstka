import './FeedBack.scss';
import index15 from "../Image/blog4-370x230.jpg"
import index16 from "../Image/blog5-370x230.jpg"
import index17 from "../Image/blog6-370x230.jpg"

function  FeedBack() {




    return (
     <div className="feedback-wrapper-container">
         <div className="feedback container">
             <div className="feedback-container ">
                 <div className="feedback-h-wrapper">
                     <h1 className="feedback-h">
                         News & Articles
                     </h1>
                 </div>
             </div>
             <div className="feedback-images-wrapper">
                 <div className="feedback-images-items">
                     <img src={index15} alt="" className="feedback-img"/>
                     <p className="feedback-p1">
                         22 August, 2017
                     </p>
                     <div className="p-wrapper">
                         <p className="feedback-p2">
                             New cosmetics for rejuvenation
                         </p>
                         <h2 className="feedback-bottom-line">

                  </h2>
                     </div>
                     <p className="feedback-p1">
                         When you need your company to have a new website or if you...
                     </p>
                 </div>
                 <div className="feedback-images-items">
                     <img src={index16} alt="" className="feedback-img"/>
                     <p className="feedback-p1">
                         22 August, 2017
                     </p>
                     <div className="p-wrapper">
                         <p className="feedback-p2">
                             New cosmetics for rejuvenation
                         </p>
                         <h2 className="feedback-bottom-line">

                  </h2>
                     </div>
                     <p className="feedback-p1">
                         When you need your company to have a new website or if you...
                     </p>
                 </div>
                 <div className="feedback-images-items">
                     <img src={index17} alt="" className="feedback-img"/>
                     <p className="feedback-p1">
                         22 August, 2017
                     </p>
                     <div className="p-wrapper">
                         <p className="feedback-p2">
                             New cosmetics for rejuvenation
                         </p>
                         <h2 className="feedback-bottom-line">

                       </h2>
                     </div>
                     <p className="feedback-p1">
                         When you need your company to have a new website or if you...
                     </p>
                 </div>

             </div>
         </div>
     </div>
    );
}

export default FeedBack;