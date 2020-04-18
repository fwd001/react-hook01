import React, { useState, useEffect, useRef, useReducer } from 'react'

const Counter = () => {
  const [count, setCount] = useState<number>(0)

  const refCount = useRef<number>(count)

  useEffect(() => {
      refCount.current = count
  })

  const handleCount = () => {
    setTimeout(() => {
      alert('current count: ' + refCount.current)
    }, 3000);
  }

  return (
    <div>
      <p>current count: { count }</p>
      <p>current refCount: { refCount.current }</p>
      <button onClick={() => setCount(count + 1)}>加</button>
      <button onClick={() => handleCount()}>弹框显示</button>
    </div>
  )
}

export default Counter