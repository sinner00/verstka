import React,{useState} from "react";
import './burger.scss';
import   index1 from  "../Image/logo.png"

function  Burger() {
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
        <li className="first-lvl1" key={item.l} onClick={()=>handle(item.l)}>

            <div className="first-lvl1-item">
                 <p className="first-lvl1-item-name">
                     {item.item}
                 </p>
                <i className="bi bi-chevron-compact-down1"> </i>

            <ul className="second-lvl-wrapper1" style={item.flag?{display:"none"}:{display:"block"}} >
                {item.item2.map((item2)=>(

                        <li className="second-lvl1" key={item2.id2}>

                            {item2.item2}
                        </li>

                    )
                )}
            </ul>
            </div>
        </li>
    ))



console.log(open)

    return (
        <div className="burger-wrapper">
                  <ul className="ul-list-burger">
                      {li}
                  </ul>
        </div>
    );
}



export default Burger;