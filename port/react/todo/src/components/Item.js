import React from 'react'

function Item(props){
    return(      
      <>
        <li className="item">
          <label className={`${props.item.finish === true ? "finish" : ""}`} onClick={()=>props.finishCheck(props.item.id)}><input type="checkbox" /><span>{props.item.title}</span></label>
        </li>
      </>
    )
  }
  export default Item;