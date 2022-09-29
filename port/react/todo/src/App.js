import { useState, useEffect } from 'react';
import './App.css';
import List from './components/List'

function App() {
  let [value,setValue] = useState('');
  const [item,setItem] = useState([
    { id:0, title:'아침약 먹기', finish:false },
    { id:1, title:'일정 체크하기', finish:true }
  ])
  const addItem = () => {
    let addValue = { id:item.length, title : value, finish : false }
    value === "" ? alert('할일을 입력해주세요.') : 
    item.indexOf(value)>= 0 ? alert('이미 추가된 일정입니다.') : setItem([...item,addValue])
    setValue('');    
  }

  const finishCheck = (id) => {
    console.log(id)
    var a = item.filter((value)=>{
      if(value.id === id) {
          return true
      }else {
          return false
      }            
  })
  console.log(a)
    // item.finish === false ? console.log('false임') : console.log('true임')
  } 

  //메인 날짜 관련
  const [allDate, setAllDate] = useState('');
  let today = new Date();   
  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1;  // 월
  let date = today.getDate();  // 날짜

  
  useEffect(() => {    
    setAllDate(year+"."+month+"."+date);
  }, []);
  return (
    <div className="App">
      <div className="wrapper">
        <section className="main">
          <h1>TODO LIST<span>{allDate}</span></h1>
          <div className="progress">
            <div className="precent">100%</div>
            <div className="circle" style={{animationDelay:'-0.35s'}}></div>            
          </div>
        </section>
        <section className="view">
          <div className="add">
            <input type="text" placeholder="오늘의 할일을 입력하세요." onChange={(e)=>{ setValue(e.target.value); }}  value={value}/>
            <button type="button" className="btn_add" onClick={addItem}>등록</button>
          </div>
          <List item={item} finishCheck={finishCheck}></List>
        </section>
      </div>
    </div>
  );
}



export default App;
