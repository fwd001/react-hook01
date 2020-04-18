import React, { useReducer } from 'react'

const Cou: React.FC = () => {
    const [state, dispatch] = useReducer((state: any, action: any) => {
        switch (action.type) {
            case 'setname':
                return {
                    ...state,
                    name: action.name
                }
                break
            default:
                return {
                    ...state
                }
        }
    }, {
        name: '张三',
        age: 18
    })

    return (
        <>
            <p>pop: {state.name} -------- {state.age}</p>
            <button
                onClick={() => {
                    dispatch({type: 'setname', name: '李四'})
                }}
            >setname</button>
        </>
    )
}

export default Cou