import './Footer.scss';
import index18 from "../Image/logo.png"


function  Footer() {




    return (
     <div className="footer-wrapper-container">
         <div className="footer-wrapper">
             <a href="/" className="footer-link">
                 <img src={index18} alt="" className="footer-img"/>
             </a>
             <p className="footer-p">

                 We Are an Awesome Team of Yoga Lovers
                 Yoga is Your Natural State
             </p>
             <div className="wrapper-links-items">
                 <div className="footer-links">
                     <div className="wrapper-items-social">
                         <i className="bi bi-twitter one-s tw"> </i>
                     </div>
                     <div className="wrapper-items-social">
                         <i className="bi bi-twitter two-s tw"> </i>
                     </div>
                     <span className="three-s">

               </span>
                 </div>

                 <div className="footer-links2">
                     <div className="wrapper-items-social">
                         <i className="bi bi-facebook one-s2 f"> </i>
                     </div>
                     <div className="wrapper-items-social">
                         <i className="bi bi-facebook two-s2 f"> </i>
                     </div>
                     <span className="three-s2">

                    </span>
                 </div>
                 <div className="footer-links3">
                     <div className="wrapper-items-social">
                         <i className="bi bi-instagram one-s3 i "> </i>
                     </div>
                     <div className="wrapper-items-social">
                         <i className="bi bi-instagram two-s3 i"> </i>
                     </div>
                     <span className="three-s3">

               </span>
                 </div>
             </div>

             <p className="footer-produced">
                 © 2021 All Rights Reserved Terms of Use and Privacy Policy
             </p>

         </div>
     </div>
    );
}

export default Footer;