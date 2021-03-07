import React,{useState} from "react";
import './burger.scss';


function  Burger({op, style}) {
    const secondLvlStyle = {
        hid:{
            overflow:"hidden",
            height:"0",
            width:"100%",
            transition: "height 300ms ease-in-out",

        },
        vis:{
            height:"4.5rem",
            overflow: "hidden",
            width: "100%",
            transition:"height 300ms ease-in-out"
        }

    }

    const [ open, setOpen] = useState(
        [


        {
            l:1,  item : "Home",
            flag :false,
            item2 : [
                { id2:1,  item2:"Default"  },
                { id2:2,  item2:"Services"  },
                { id2:3,  item2:"Video"  },
            ]
        },
        {
            l:2,  item : "Pages",
            flag :false,
            item2 : [
                { id2:1,  item2:"About"  },
                { id2:2,  item2:"Services"  },
                { id2:3,  item2:"Spa offers"  },
            ]
        },
        {
            l:3,  item : "Gallery",
            flag :false,
            item2 : [
                { id2:1,  item2:"Boxed"  },
                { id2:2,  item2:"Full width"  },
                { id2:3,  item2:"Full screen"  },
            ]
        },
        {
            l:4,  item : "Shop",
            flag :false,
            item2 : [

            ]
        },
        {
            l:5,  item : "Blog",
            flag :false,
            item2 : [
                { id2:1,  item2:"Classic"  },
                { id2:2,  item2:"Bg Image"  },
                { id2:3,  item2:"Text minimal"  },
            ]
        },
        {
            l:6,  item : "Contact",
            flag :false,
            item2 : [


            ]
        },





        ]

    );



    const handle = (id) => (
        setOpen([...open.map((item)=> (
                item.l === id ? {...item, flag: !item.flag} : {...item}
            )

        )])


    )

    const li = open.map((item )=>  (
        <li className="first-lvl1" key={item.l} onClick={()=>handle(item.l)} >

            <div className="first-lvl1-item">
                 <p className="first-lvl1-item-name">
                     {item.item}
                 </p>
                <i className="bi bi-chevron-compact-down1"> </i>

            <ul className="second-lvl-wrapper1"   >
                <div className="m" style={item.flag?secondLvlStyle.vis:secondLvlStyle.hid} >
                {item.item2.map((item2)=>(
                       <div className="hj"  >
                           <li className={item.flag?"one-list":"two-list"} key={item.l} >
                               {item2.item2}
                           </li>
                       </div>


                    )
                )}
                </div>
            </ul>
            </div>
        </li>
    ))



console.log(open)

    return (
        <div className="burger-wrapper" style={op
            ?style.visibilit
            :style.hidd}>
                  <ul className="ul-list-burger" >
                      {li}
                  </ul>
        </div>
    );
}



export default Burger;