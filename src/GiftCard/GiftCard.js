import './GiftCard.scss';
import index14 from "../Image/gift-card.png"



function  GiftCard() {




    return (
      <div className="sea-wrapper">
               <div className="sea-item">
                   <img src={index14} alt="" className="sea-card-image"/>
                   <p className="sea-card">It’s so Easy to Make Other Person Happy! </p>
                   <p className="sea-card">Buy Gift Certificate. Share your Love. </p>
                   <div className="card-button-wrapper">
                       <button className="button-card">
                           Select Your Dream
                       </button>
                   </div>
               </div>
      </div>
    );
}

export default GiftCard;