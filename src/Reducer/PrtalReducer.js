export const portalReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PATIENT':
            console.log(action)

            const add = {
                name: action.name,
                id: action.name+(state.patients.length)
            }
            const nePatients = [...state.patients, add]
            return{
                ...state,
                patients: nePatients
            }
            break;
        
            case 'REMOVE':
                console.log(action)
                const remove = [state.patients.filter(patient=>patient.id !==action.id)]
                return{
                    ...state,
                    patients:remove
                }
                break;
    
        default:
            return{
                ...state
            }
            break;
    }
};