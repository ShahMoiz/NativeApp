import {ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE} from '../actions/actionTypes';

const initialState = {
    selectedItem: null,
    places: []
}

 const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_PLACE:
        return {
            ...state,
            places: state.places.concat({ 
                name: action.placeName, 
                id: Math.random(), 
                img: {uri: 'https://www.acupofkarachi.com/wp-content/uploads/2017/04/Do-Darya800445.jpg'} })
        }
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => place.id !== state.selectedItem.id),
                selectedItem: null
            }
        case SELECT_PLACE:
            return {
                ...state,
                selectedItem: state.places.find(place => place.id === action.id)
            }
        case DESELECT_PLACE:
            return {
                ...state,
                selectedItem: null
            }
        default:
        return state
    }
}

export default reducer