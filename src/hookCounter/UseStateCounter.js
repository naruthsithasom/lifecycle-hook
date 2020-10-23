import React, {useState} from 'react'
//กรณีใช้useState ไม่ต้องใข้ในการClass 
export const UseStateCounter = () => {
  const [count, counterUpdate] = useState(0) //ให้ count = 0
  console.log(useState(0))
  return(
    <div className="Cus-text-center ">
      <h1>{ count }</h1>
      <br/>
      <button className="Cus-button" onClick={() => counterUpdate( count + 1 )}>+</button>
      <button className="Cus-button" onClick={() => counterUpdate( count - 1 )}>-</button>
      <button className="Cus-button" onClick={() => counterUpdate(0)}>reset</button>
    </div>
  )
}