import React,{useState} from "react";
import './burger.scss';
import   index1 from  "../Image/logo.png"

function  Burger() {
    const [ open, setOpen] = useState(
        [
            {
                id:1,
                wrapper:<div className="ababa"> </div>,
                keyWrapper:false,
                wrapperItem:
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
                {},
                {},
                {}
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
                   {},
                {},
                {}
            ]
        },

    ]


            }
        ]

    );



    const handle = (id) => (
        setOpen([...open.map((item)=> (
         item.id === id ? {...item, keyWrapper: !item.keyWrapper} : {...item}
            )

        )])


    )
    const handle1 = (id) => (
        setOpen([...open.map((item2)=> (
           [...item2.wrapperItem.map((item3)=>
             item3.l===id?{...item3, flag:!item3.flag}:{...item3}

            )]))]))

    const li = open.map((item )=>  (
        <li className="first-lvl1" key={item.id}>
            <div className="burger" onClick={()=>handle(item.id)}>

            </div >
            <div className={item.keyWrapper?"one-b":"two-b"}>
                {item.wrapper}
                <i className="bi bi-chevron-compact-down1"> </i>

            <ul className="second-lvl-wrapper1">
                {item.wrapperItem.map((item2)=>(

                        <li className="second-lvl1" key={item2.l}>
                           <span className="second-lvl-item11" onClick={()=>handle1(item2.l)}>
                               {item2.item}
                            </span>
                            <i className="bi bi-chevron-compact-right1"> </i>
                            <div>

                            </div>
                        </li>

                    )
                )}
            </ul>
            </div>
        </li>
    ))



console.log(open)

    return (
        <div className="header">
          <div className="img-wrapper">
              <img src={index1} alt="logo" className="header-img" />
              <div className="ul-wrapper">
                  <ul className="ul">
                      {li}
                  </ul>
              </div>
              <div className="burger-wrapper" id="burger-wrapper">
                  <div className="burger-wrapper-item " >
                      <div className="burger-items s"> </div>
                      <div className="burger-items s"> </div>
                      <div className="burger-items"> </div>
                  </div>
              </div>
          </div>


        </div>
    );
}



export default Burger;