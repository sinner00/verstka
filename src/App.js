
import './app.scss';
import Header from "./Header/Header";
import Carousel from "./Carousel/Carousel";
import Services from "./Services/Services";
import Description from "./Description/Description";
import QuantityProcedures from "./QuantityProcedures/QuantityProcedures";
import Photos from "./Photos/Photos";
import GiftCard from "./GiftCard/GiftCard";
import FeedBack from "./FeedBack/FeedBack";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <Services/>
      <Description/>
      <QuantityProcedures/>
      <Photos/>
      <GiftCard/>
      <FeedBack/>
      <Footer/>
    </div>
  );
}

export default App;
