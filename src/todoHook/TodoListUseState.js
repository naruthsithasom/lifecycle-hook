import React, { useState } from 'react'
import arrow from './arrow.png'

export const TodoListUseState = () => {
  const [text, textUpdate] = useState("") //text = ""
  const [list, listUpdate] = useState([])// list = []
  const [done, doneUpdate] = useState([])// done = []
  
  const handleAdd = () => {
    listUpdate([...list, text])
    textUpdate("")
  }
  const handleDone = (index) => {
    let data = [...list]
    let move = data.splice(index, 1)
    doneUpdate([...done, ...move])
    listUpdate(data)
  }

  const handleDelete = (index) => {
    let data = [...done]
    data.splice(index, 1)
    doneUpdate(data)
  }
  // const handleBack = (index) => {
  //   let data = [...done]
  //   let move = data.splice(index, 1)
  //   listUpdate([...list, ...move])
  //   doneUpdate(data) 
  // }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "300px 300px", gap: "20px" }}>
      <div>
        <h3>Todo List UseState</h3>
        <ul style={{ listStyle: "none" }}>
          {list.map(((text, index) => <li>{text} <span onClick={() => handleDone(index)}><img src={arrow} style={{ width: "15px", verticalAlign: 'bottom' }} /></span></li>))}
        </ul>
        <div>
          <input type="text" value={text} onChange={(e) => textUpdate(e.target.value)} />
          <button onClick={handleAdd}>add text</button>
        </div>
      </div>

      <div>
        <h3>Done</h3>
        <ul>
          {done.map((value, index) => <li>{value}<span>
            {/* สร้างfucntionแยกออกเพื่อความไม่ซับซ้อน */}
            <button onClick={() => handleDelete(index)}>delete</button>
            {/* <button onClick={() => handleBack(index)}>back</button> */}
            {/* อีกแบบที่ไม่ใข้ fucntion */}
            <button onClick={() => {
              let data = [...done]
              let move = data.splice(index, 1)
              listUpdate([...list, ...move])
              doneUpdate(data) 
            }}>back</button>
          </span></li>)}
        </ul>
      </div>
    </div>
  )
} 