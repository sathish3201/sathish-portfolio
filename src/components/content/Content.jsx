import React, { useRef } from 'react'
import "./Content.css"
import items from "./list.json"
const Content = ({image,title,discription}) => {
 
  return (
    <div className="box-wrapper">
       {
        Object.keys(items.project).map((key,index) => (
        <div className="content" key={key} id={key}>
            <div className="box">
                <div className="box-left">
                    <div id="logo-image" 
                    style={{background : `url(${items.project[key].image})`,
                            backgroundPosition : "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
            
                }}></div>
                </div>
                <div className="box-right">
                    <div className="box-title">{key}</div>
                    <div className="box-description">
                        {items.project[key].description}
                    </div>
                </div>
            </div>
         </div>
    
        ))  
       }

   </div>
  )
}

export default Content
