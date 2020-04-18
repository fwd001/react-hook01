import React, { useState } from 'react'

type UserInfo = {
    name: string,
    age: number,
    children: string
}

const User:React.FC<UserInfo> = (prop) => {
    const [count, setCount] = useState<number>(0)
    return (
        <div className="User">
            <p>{prop.name}</p>
            <p>{prop.age}</p>
            <p>{prop.children}</p>
            <p>{count}</p>
            <button onClick={() => {setCount(count + 1)}}>setCount</button>
            <button onClick={() => {setCount(count - 1)}}>setCount</button>
        </div >
    )
}

export default User

