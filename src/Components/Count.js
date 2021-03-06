import React, { useReducer } from 'react';
const countState={
    count:0,
    clicks:0,
    active:true,
    count:0
}
const countReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return{
                ...state,
                count: state.count +1
            }
            break;
            case 'DECREMENT':
                return{
                    ...state,
                    count: state.count -1
                }
                break;
        default:
            return state;
            break;
      }
};




const Count = () => {
    const [state, dispatch] = useReducer(countReducer, countState)
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={()=>dispatch({type:'INCREMENT'})} >Increse</button>
            <button onClick={()=>dispatch({type:'DECREMENT'})}>Decrese</button>
        </div>
    );
};

export default Count;