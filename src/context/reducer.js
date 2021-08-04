
 const Transationreducer=(state, action)=>{
    switch(action.type){
        case "ADD": 
             return{
                 ...state,
                 transations:[action.payload, ...state.transations]
             }
       case "REMOVE_HISTORY":
        return {
            ...state,
            transations: state.transations.filter(transation=>transation.id!==action.payload)
        }


        default: 
                return state;
    }
    
}

export default Transationreducer;