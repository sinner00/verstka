import React,{useState} from "react";
import './Header.scss';
import   index1 from  "../Image/logo.png"
import Burger from "../burger/burger";

function  Header() {



    const list = [
        {
            id:1,  item : "Home",
            item2 : [
                { id2:1,  item2:"Default"  },
                { id2:2,  item2:"Services"  },
                { id2:3,  item2:"Video"  },
            ]
        },
        {
            id:2,  item : "Pages",
            item2 : [
                { id2:1,  item2:"About"  },
                { id2:2,  item2:"Services"  },
                { id2:3,  item2:"Spa offers"  },
            ]
        },
        {
            id:3,  item : "Gallery",
            item2 : [
                { id2:1,  item2:"Boxed"  },
                { id2:2,  item2:"Full width"  },
                { id2:3,  item2:"Full screen"  },
            ]
        },
        {
            id:4,  item : "Shop",
            item2 : [

            ]
        },
        {
            id:5,  item : "Blog",
            item2 : [
                { id2:1,  item2:"Classic"  },
                { id2:2,  item2:"Bg Image"  },
                { id2:3,  item2:"Text minimal"  },
            ]
        },
        {
            id:6,  item : "Contact",
            item2 : [

            ]
        },

    ]
    const li = list.map((item )=>  (
        <li className="first-lvl" key={item.id}>
            <div className="first-lvl-item">
                  <span className="first-lvl-name">
                {item.item}
            </span>
                <i className="bi bi-chevron-compact-down"> </i>
            </div>
            <ul className="second-lvl-wrapper">
                {item.item2.map((item2)=>(

                        <li className="second-lvl" key={item2.id2}>
                            <span className="second-lvl-item1">
                                {item2.item2}
                            </span>
                            <i className="bi bi-chevron-compact-right"> </i>
                        </li>

                    )
                )}
            </ul>
        </li>
    ))







    return (
       <div className="header-wrapper">
           <div className="header">
               <div className="img-wrapper">
                   <img src={index1} alt="logo" className="header-img"/>
                   <div className="ul-wrapper">
                       <ul className="ul">
                           {li}
                       </ul>
                   </div>
                   <div className="burger-wrapper" id="burger-wrapper">
                       <div className="burger-wrapper-item " >
                           <div className="burger-items"> </div>
                           <div className="burger-items"> </div>
                           <div className="burger-items"> </div>
                       </div>
                   </div>
               </div>


           </div>
           <Burger/>
       </div>
    );
}



export default Header;