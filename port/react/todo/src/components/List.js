import React from 'react'
import Item from './Item'

function List(props){
    return(      
      <div className="list">
        <b>TO DO</b>
        <ul>        
          {
            props.item.filter(item => item.finish === false)
              .map(item => {return <Item item={item} key={item.id} finishCheck={props.finishCheck}></Item>}
            )
          }
        </ul>
        <b>COMPLETE</b>
        <ul>
          {
            props.item.filter(item => item.finish !== false)
              .map(item => {return <Item item={item} key={item.id} finishCheck={props.finishCheck}></Item>}
            )
          }
        </ul>
      </div>
    )
  }
  export default List;