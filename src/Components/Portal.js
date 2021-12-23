import React, { useReducer, useState } from 'react';
import { PortalState } from '../app/PortalStore';
import { portalReducer } from '../Reducer/PrtalReducer';

const Portal = () => {
    const [state, dispatch] = useReducer(portalReducer, PortalState)
    const [name, setName] = useState('')
    return (
        <div>
            <h1>My Portal {state.patients.length}</h1>
            <input type="text" onChange= {e=>setName(e.target.value)} />
            <button onClick={()=>dispatch({type:'ADD_PATIENT', name:name})}>Add</button>

            {
                state.patients.map(patient => <p 
                    key={patient.id}>
                        {patient.name}{patient.id}
                        <button onClick={()=>dispatch({type:'REMOVE', id: patient.id})}>Cancel</button>
                </p>)
            }
        </div>
    );
};

export default Portal;