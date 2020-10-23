import React, {useState} from 'react'

export const UseStateCounter = () => {
  const [count, counterUpdate] = useState(0) //ให้ count = 0
  return(
    <div className="Cus-text-center ">
      { count }
      <br/>
      <button className="Cus-button" onClick={() => counterUpdate( count + 1 )}>+</button>
      <button className="Cus-button" onClick={() => counterUpdate( count - 1 )}>-</button>
      <button className="Cus-button" onClick={() => counterUpdate(0)}>reset</button>
    </div>
  )
}