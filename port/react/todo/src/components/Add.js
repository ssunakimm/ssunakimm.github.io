import React from 'react'

function Add(props){
    return(
      <div className="add">
        안뇽 {props.value}

        <input type="text" placeholder="오늘의 할일을 입력하세요." onChange={(e)=>{ props.setValue('aaa');console.log("바뀐값은"+props.value) }} />
        <button className="btn_add">등록</button>
      </div>
    )
  }
  export default Add;