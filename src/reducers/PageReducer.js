const pageReducer = (state={},action)=>{
    console.log(action.obj)
    switch(action.type){
        case 'UPDATE_SELECTED_PAGE':
            return action.obj;
        default:
            return state;
    }
}

export default pageReducer;